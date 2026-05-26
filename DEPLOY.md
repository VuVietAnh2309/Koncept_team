# Deploy guide — koncept.website

Tài liệu deploy landing page Koncept lên VPS qua nginx + Let's Encrypt.

- **Domain**: koncept.website (HTTPS, có SSL auto-renew)
- **VPS**: alias SSH `vps-koncept` (đã cấu hình trong `~/.ssh/config`)
- **Web root trên VPS**: `/var/www/koncept-landingpage/`
- **Stack**: Next.js 16 static export → nginx serve files tĩnh

---

## Quick deploy (99% các trường hợp)

Sau khi sửa code trên Mac, chạy từ root project (`/Users/vanhkhongpeo/Documents/Koncept_team/web`):

```bash
npm run build && rsync -avz --delete dist/ vps-koncept:/var/www/koncept-landingpage/
```

`&&` đảm bảo: build lỗi thì rsync không chạy, tránh đẩy code hỏng lên prod.

Sau đó:
1. Mở https://koncept.website
2. Hard refresh để bypass browser cache:
   - Mac Chrome/Safari: `Cmd + Shift + R`
   - Hoặc tab Incognito để chắc chắn không vướng cache

**Không cần** ssh vào VPS. **Không cần** reload nginx — file mới được phục vụ ngay.

---

## (Tuỳ chọn) Commit lên GitHub sau mỗi lần deploy

```bash
git add -A
git commit -m "Update: <mô tả ngắn>"
git push
```

Repo: https://github.com/VuVietAnh2309/Koncept_team (private).

---

## Build output

`npm run build` tạo folder `dist/` (đã config `output: "export"`, `distDir: "dist"` trong `next.config.ts`).

Nội dung `dist/`:
- `index.html` — trang landing
- `404.html` — trang lỗi
- `_next/static/...` — JS, CSS, fonts (có hash trong tên file → browser auto-load file mới khi build)
- Toàn bộ asset trong `public/` (ảnh, CV, avatar...) được copy sang root `dist/`

---

## Khi nào cần ssh vào VPS

Quy trình deploy thường ngày không cần ssh. Chỉ ssh khi:

| Tình huống | Việc làm |
|-----------|----------|
| Đổi nginx config (thêm domain, redirect, header...) | Sửa `/etc/nginx/sites-available/koncept.website`, `nginx -t`, `systemctl reload nginx` |
| Xem log access / error nginx | `tail -f /var/log/nginx/access.log` hoặc `/var/log/nginx/error.log` |
| SSL gặp vấn đề | `certbot certificates` để xem trạng thái, `certbot renew --dry-run` để test renew |
| Cập nhật OS (định kỳ 1-2 tháng) | `apt update && apt upgrade -y` |
| Xem ai đang truy cập trang | `tail -f /var/log/nginx/access.log` |

Ssh vào:
```bash
ssh vps-koncept
```

---

## Cấu trúc trên VPS

```
/var/www/koncept-landingpage/         ← web root, là toàn bộ dist/ đã upload
├── index.html
├── 404.html
├── _next/...
└── (ảnh, CV, avatar...)

/etc/nginx/sites-available/
└── koncept.website                   ← config nginx (certbot đã sửa thêm HTTPS block)

/etc/nginx/sites-enabled/
└── koncept.website → ../sites-available/koncept.website   (symlink)

/etc/letsencrypt/live/koncept.website/
├── fullchain.pem                     ← SSL cert
└── privkey.pem                       ← SSL private key
```

---

## SSL / HTTPS

- Cert do **Let's Encrypt** cấp, free, hạn 90 ngày.
- **Auto-renew** đã được certbot setup qua systemd timer. Kiểm tra:
  ```bash
  systemctl status certbot.timer
  certbot renew --dry-run     # mô phỏng renew để chắc chắn flow OK
  ```
- Domain `.website` nằm trong **HSTS preload list** của Chrome → browser luôn ép HTTPS, không thể truy cập qua HTTP plain.

---

## Cấu hình Next.js liên quan deploy

File `next.config.ts`:

```ts
const nextConfig: NextConfig = {
  output: "export",              // build ra static HTML/JS/CSS thay vì cần Node server
  distDir: "dist",               // output folder tên "dist" thay vì mặc định "out"
  images: { unoptimized: true }, // dùng <img> raw, không qua Next image optimizer (cần server)
  trailingSlash: true,           // route /about → /about/index.html (nginx friendly)
};
```

**Đừng dùng** các feature sau (sẽ break static export):
- Server Actions
- Dynamic routes không kèm `generateStaticParams`
- Route Handlers đọc request
- Cookies / headers / redirects qua next.config
- `next/image` mặc định (đã dùng `<img>` raw)

---

## Troubleshooting

### Site không lên (404 / connection refused)
```bash
ssh vps-koncept
systemctl status nginx        # nginx có chạy không
nginx -t                      # config có syntax error không
tail -n 50 /var/log/nginx/error.log
```

### Cert hết hạn / SSL lỗi
```bash
ssh vps-koncept
certbot certificates          # xem expiry date
certbot renew                 # renew thủ công nếu auto-renew fail
systemctl reload nginx
```

### Code mới deploy nhưng browser vẫn thấy version cũ
1. Hard refresh: `Cmd + Shift + R`
2. Tab Incognito
3. Nếu vẫn cũ: ssh vào VPS, kiểm tra `ls /var/www/koncept-landingpage/_next/static/` — folder hash có đổi so với local `dist/_next/static/` không. Nếu giống nhau → file đã được upload đúng, chỉ là cache. Nếu khác → rsync chưa chạy đúng, chạy lại.

### Build lỗi TypeScript / lint
Sửa lỗi trước, không bypass. Nếu bí, paste error vào Claude/ChatGPT để được giải thích.

### Lỡ chạy lệnh sai trên VPS
- Không lỡ `rm -rf` thì còn cứu được. Hỏi backend admin trước khi thử fix.
- Hosting provider thường có snapshot — có thể restore VPS về thời điểm trước đó.

---

## Lệnh hữu ích để khám phá VPS

Xem thêm trong cuộc trò chuyện với Claude (đã liệt kê). Tóm tắt:

```bash
# Tổng quan máy
hostnamectl
free -h          # RAM
df -h            # disk
htop             # process viewer (cài: apt install htop)

# Network
ip a             # interface + IP
ss -tlnp         # port nào đang listen

# Nginx
systemctl status nginx
nginx -t
cat /etc/nginx/sites-available/koncept.website

# Logs
tail -f /var/log/nginx/access.log     # live access log
tail -f /var/log/nginx/error.log
journalctl -u nginx -n 50

# Disk usage explorer (cài: apt install ncdu)
ncdu /var/www
```
