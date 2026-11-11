# Hoành Uy — bản demo giao diện mới cho maykeonhiet.com

Web tĩnh (HTML/CSS/JS, không cần build). Đây là bản demo giao diện, sau này chuyển sang WordPress.

## Chạy ở máy

Bấm đúp `chay-local.bat` (cần Python), rồi mở http://localhost:8124

## Trang

- `index.html` trang chủ
- `san-pham.html` danh mục (lọc theo nhóm `?loai=` và hãng `?hang=`)
- `chi-tiet.html?id=...` chi tiết sản phẩm
- `dich-vu.html`, `ung-dung.html`, `gioi-thieu.html`, `lien-he.html`

## Nội dung

- `san-pham-du-lieu.js`: 45 sản phẩm lấy từ maykeonhiet.com ngày 11/11/2026 (tên, mô tả, ảnh thật; giá "Liên hệ" như site gốc). Một số mô tả Robatech là tiếng Anh như site gốc.
- `du-lieu.js`: thông tin công ty (thật), dịch vụ và ứng dụng.

## Còn là mẫu / chưa có

- Mô tả từng dịch vụ và từng ngành ứng dụng là **viết lại** (trang dịch vụ trên site gốc đang trống) — cần doanh nghiệp duyệt.
- Cách xếp sản phẩm theo nhóm (máy nấu keo, đầu súng...) là xếp mới; site gốc xếp theo hãng.
- Form liên hệ **chưa có máy chủ nhận**: bấm Gửi chỉ mở ứng dụng email của khách với nội dung đã điền.
- Zalo dùng số 0978 269 117 (giả định số này có Zalo). Chưa có link Facebook.
- Chưa có trang Tin tức, giỏ hàng, tìm kiếm, database.
- Ảnh ngành ứng dụng lấy từ site gốc, chất lượng không đều.
