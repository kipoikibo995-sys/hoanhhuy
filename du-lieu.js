/* Thông tin công ty, dịch vụ, ứng dụng.
   Lấy từ maykeonhiet.com ngày 11/11/2026. Chỗ nào là chữ viết lại (chưa có trên site gốc) có ghi chú "viết lại". */
window.CTY = {
  ten: 'Công ty TNHH Hoành Uy',
  ngan: 'Hoành Uy',
  thanhLap: 2020,
  dt: ['0978 269 117', '0966 592 818'],
  email: 'hotmeltmachine@gmail.com',
  zalo: '0978269117', // giả định số chính có Zalo
  facebook: '', // site gốc có nút Facebook nhưng chưa lấy được link
  vanPhong: [
    { tp: 'TP. Hồ Chí Minh', dc: '58 Đường số 2A, Khu dân cư Vĩnh Lộc, Phường Bình Tân', chinh: true },
    { tp: 'Hà Nội', dc: 'Lầu 22, Tòa nhà Sông Đà, Phạm Hùng, Phường Từ Liêm' },
    { tp: 'Đà Nẵng', dc: '80 Hà Bổng, Ngũ Hành Sơn' }
  ]
};

/* Nhóm sản phẩm (site gốc xếp theo hãng; bản mới xếp thêm theo loại để dễ tìm) */
window.LOAI = [
  { id: 'may', ngan: 'Máy nấu keo', ten: 'Máy nấu keo, thùng keo', anh: 'thung-keo-robatech-concept-b-1.jpg' },
  { id: 'sung', ngan: 'Đầu súng', ten: 'Đầu súng phun keo', anh: 'dau-sung-phun-keo-es-1.jpg' },
  { id: 'cam-tay', ngan: 'Cầm tay', ten: 'Máy phun keo cầm tay', anh: 'sung-phun-keo-nhiet-mini-mhg-1.jpg' },
  { id: 'phu-tung', ngan: 'Béc, ống dẫn', ten: 'Béc phun, ống dẫn keo', anh: 'ong-dan-keo-1.jpg' },
  { id: 'keo', ngan: 'Keo nhiệt', ten: 'Keo nhiệt, keo hot melt', anh: 'keo-nhiet-keo-hot-melt-2.jpg' },
  { id: 'hoa-chat', ngan: 'Dung dịch vệ sinh', ten: 'Dung dịch vệ sinh máy', anh: 'dung-dich-hoa-chat-ve-sinh-gard-1.jpg' }
];

window.HANG = ['Nordson', 'Robatech', 'WELEO', 'Meltons', 'ITW Dynatec', 'HES', 'hhs'];

/* Ảnh đầu trang chủ: 3 máy tiêu biểu (ảnh sản phẩm thật) */
/* Ảnh đầu trang: ảnh thật đã tách nền (assets/img/hero), thông số lấy từ mô tả trên site gốc */
window.HERO = [
  { id: 'may-phun-keo-bom-banh-rang-mega-series', anh: 'may-phun-keo-bom-banh-rang-mega-series-1.webp',
    ts: [['Bồn keo', '20 – 200 kg'], ['Điều khiển', 'Cảm ứng 7 inch'], ['Gia nhiệt', '6 ống + 6 vùng']] },
  { id: 'may-phun-keo-bom-banh-rang-tt-series', anh: 'may-phun-keo-bom-banh-rang-tt-series-1.webp',
    ts: [['Bồn keo', '3 / 5 / 9 kg'], ['Ống keo', '2 – 4 ống'], ['Bơm', 'Bánh răng']] },
  { id: 'thung-keo-problue', anh: 'thung-keo-problue-1.webp',
    ts: [['Bồn keo', '4 – 50 lít'], ['Bơm khí nén', '1 : 15'], ['Công suất bơm', '35 – 100 kg/h']] }
];

/* Dịch vụ: tên và danh sách lấy từ site gốc; đoạn mô tả là viết lại (trang dịch vụ trên site gốc đang trống) */
window.DV = [
  { id: 'cung-cap-may', ten: 'Cung cấp máy phun keo', anh: 'sp/thung-keo-problue-1.jpg',
    mo: 'Máy mới và máy đã qua sử dụng của Nordson, Robatech, WELEO, Meltons, ITW Dynatec, HES, hhs, kèm đầu súng, ống dẫn và béc phun thay thế.',
    y: ['Máy phun keo tự động và bán tự động', 'Máy đã qua sử dụng, đã kiểm tra', 'Phụ tùng tương thích nhiều hãng'] },
  { id: 've-sinh', ten: 'Vệ sinh, bảo trì máy keo nhiệt', anh: 'sp/dung-dich-hoa-chat-ve-sinh-gard-2.jpg',
    mo: 'Vệ sinh thùng keo, ống dẫn và đầu súng định kỳ để keo chảy đều, máy bền và ít dừng chuyền. Có sẵn dung dịch vệ sinh chuyên dụng.',
    y: ['Vệ sinh tại nhà máy', 'Bảo trì định kỳ theo lịch', 'Dung dịch vệ sinh GARD, SVN, Cleaner C'] },
  { id: 'sua-chua', ten: 'Sửa chữa máy phun keo', anh: 'sp/dau-sung-phun-keo-mf-eof-2.jpg',
    mo: 'Kiểm tra, thay thế linh kiện và hiệu chỉnh máy phun keo của nhiều hãng. Đội kỹ thuật hỗ trợ 24/7 khi chuyền gặp sự cố.',
    y: ['Sửa máy nhiều hãng', 'Thay linh kiện, béc, ống dẫn', 'Hỗ trợ kỹ thuật 24/7'] },
  { id: 'cho-thue', ten: 'Cho thuê máy phun keo', anh: 'sp/may-keo-nhiet-hes-1106-1.jpg',
    mo: 'Cho thuê máy phun keo và vật tư khi dây chuyền cần chạy gấp, chạy thử, hoặc trong lúc chờ sửa và chờ máy mới.',
    y: ['Thuê ngắn hạn và dài hạn', 'Kèm vật tư của máy', 'Lắp đặt, hướng dẫn vận hành'] },
  { id: 'giai-phap', ten: 'Giải pháp đóng gói, bao bì', anh: 'nganh/bao-bi.jpg',
    mo: 'Tư vấn hệ thống dán keo cho máy đóng thùng, dán hộp, dán carton theo dạng tự động, bán tự động hoặc thủ công.',
    y: ['Khảo sát dây chuyền', 'Chọn máy, súng và keo phù hợp', 'Tư vấn miễn phí'] },
  { id: 'keo', ten: 'Cung cấp keo nhiệt, keo sữa', anh: 'sp/keo-nhiet-keo-hot-melt-2.jpg',
    mo: 'Keo hot melt EVA dạng hạt, PSA dạng bánh, keo cây silicon và keo sữa (cold glue) cho bao bì, gỗ, in ấn và nhiều ngành khác.',
    y: ['Keo EVA, PSA, keo cây', 'Keo sữa (cold glue)', 'Tư vấn chọn keo theo vật liệu'] }
];

/* Ứng dụng: tên ngành và ảnh lấy từ site gốc; mô tả ngắn là viết lại */
window.NGANH = [
  { id: 'bao-bi', ten: 'Bao bì, đóng gói', mo: 'Dán thùng carton, hộp giấy, khay trên máy đóng thùng tự động và bán tự động.' },
  { id: 'thuc-pham', ten: 'Thực phẩm, đồ uống', mo: 'Dán thùng, hộp, khay và nhãn cho thực phẩm, nước giải khát, bia.' },
  { id: 'go', ten: 'Gỗ, nội thất', mo: 'Ghép cạnh, dán nẹp, ghép khung bàn ghế tủ; dán gỗ với kính, kim loại, nhựa.' },
  { id: 'dien-tu', ten: 'Điện tử', mo: 'Cố định linh kiện, chống rung, bọc chân dây trên bo mạch.' },
  { id: 'in-an', ten: 'In ấn', mo: 'Đóng sách gáy keo, dán bìa, dán túi giấy và bao thư.' },
  { id: 'duoc', ten: 'Dược phẩm', mo: 'Dán hộp thuốc và niêm phong trên dây chuyền tốc độ cao.' },
  { id: 'nem', ten: 'Nệm', mo: 'Dán lò xo túi, mút và vải bọc nệm.' },
  { id: 'thuoc-la', ten: 'Thuốc lá', mo: 'Dán hộp, tút và bao bì trong khâu đóng gói.' },
  { id: 'khac', ten: 'Ứng dụng khác', mo: 'Bỉm tã, ô tô, đồ gia dụng, bộ lọc... liên hệ để được tư vấn riêng.' }
];

/* Giới thiệu: lấy nguyên ý từ trang chủ và trang giới thiệu của site gốc */
window.GT = {
  mo: 'Hoành Uy là công ty thương mại dịch vụ thành lập năm 2020, cung cấp thiết bị và giải pháp máy phun keo nhiệt cho các ngành bao bì, đóng gói, dán nhãn, nội thất, điện tử và nhiều ngành công nghiệp khác.',
  them: 'Máy phun keo nhiệt tự động và bán tự động được nhập trực tiếp từ các thương hiệu uy tín trên thế giới: bền, chạy ổn định, dễ vận hành.',
  phuongCham: 'Sự hài lòng của quý khách hàng là thành công của chúng tôi.',
  suMenh: 'Mang lại sự hài lòng tối đa cho khách hàng bằng giải pháp hiệu quả, tối ưu chi phí và nâng cao năng suất sản xuất.',
  lyDo: [
    { t: 'Chất lượng', m: 'Máy được kiểm định nghiêm ngặt, chạy bền và tiết kiệm keo.' },
    { t: 'Tư vấn', m: 'Kỹ sư nhiều năm kinh nghiệm, đưa giải pháp theo từng dây chuyền.' },
    { t: 'Bảo hành', m: 'Bảo hành dài hạn, hỗ trợ kỹ thuật 24/7.' },
    { t: 'Giá cạnh tranh', m: 'Giá tốt đi cùng chất lượng dịch vụ.' }
  ]
};
