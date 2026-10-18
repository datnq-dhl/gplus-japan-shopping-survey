# PROJECT REQUIREMENTS DOCUMENT (PRD)
## GPLUS TRAVEL - HDV TOUR SHOPPING FEEDBACK & DATA COLLECTION SYSTEM

| Thông tin tài liệu | Chi tiết |
| :--- | :--- |
| **Mã dự án** | `GPLUS-PRD-2026-001` |
| **Tên hệ thống** | Hệ thống Web Khảo sát & Đề xuất Tối ưu Shopping Tour Nhật Bản |
| **Đơn vị chủ quản** | Gplus Travel (Khối Lữ hành Quốc tế) |
| **Phiên bản tài liệu** | `1.0.0` |
| **Trạng thái** | `Ready for Development` |
| **Target Delivery** | Static Web Deployment (Vercel) / Mobile-First WebView |
| **Email tiếp nhận dữ liệu** | `dat@grandk.org` |

---

## 1. Executive Summary & Project Objectives

### 1.1. Bối cảnh nghiệp vụ (Business Context)
Gplus Travel thường xuyên triển khai các đoàn khách du lịch Việt Nam tham quan tuyến Nhật Bản (cung đường vàng: Tokyo – Fuji – Kyoto – Osaka). Hoạt động shopping tại các điểm đối tác truyền thống (cụ thể là hệ thống cửa hàng trà đạo tại khu vực núi Phú Sĩ và Kyoto) đóng vai trò then chốt trong cấu trúc chi phí - doanh thu và trải nghiệm khách hàng. 

Hiện tại, việc thu thập thông tin phản hồi từ Hướng dẫn viên (HDV) hiện trường đang phân mảnh qua tin nhắn trao đổi rời rạc, thiếu tính hệ thống và không thể đo lường định lượng được các rào cản chuyển đổi bán hàng.

### 1.2. Vấn đề cốt lõi (Problem Statement)
- Thiếu kênh thu thập dữ liệu chuẩn hóa, trực quan và dễ tiếp cận cho đội ngũ HDV di chuyển liên tục.
- Dữ liệu khảo sát dạng văn bản/file Word không tương thích trên thiết bị di động, tỷ lệ phản hồi thấp.
- Doanh nghiệp cần giải pháp phần mềm độc lập, không phụ thuộc tài khoản nội bộ phức tạp, thu thập dữ liệu tức thì và tự động định tuyến báo cáo về hòm thư điều hành (`dat@grandk.org`).

### 1.3. Mục tiêu dự án (Project Goals & KPIs)
- **Time-to-deploy:** Triển khai hoàn tất trong vòng 24 giờ trên hạ tầng Serverless/Static Edge.
- **Completion Rate:** Tỷ lệ HDV hoàn thành khảo sát đạt trên 85% nhờ giao diện tối ưu chạm/chọn.
- **Data Latency:** Thời gian chuyển tiếp dữ liệu từ lúc HDV bấm "Submit" đến khi email điều hành nhận được kết quả không quá **30 giây**.
- **Maintenance Cost:** $0 chi phí vận hành hạ tầng định kỳ.

---

## 2. Stakeholders & User Persona

### 2.1. Ma trận các bên liên quan (Stakeholder Matrix)
- **Sponsor / Business Owner:** Ban Giám đốc Gplus Travel.
- **Data Consumer:** Bộ phận Điều hành & Kế toán tour Outbound (`dat@grandk.org`).
- **End-user:** Đội ngũ Hướng dẫn viên (HDV) chuyên tuyến Nhật Bản.
- **Technical Lead / Developer:** Đội ngũ phát triển Frontend / DevOps.

### 2.2. User Persona: Hướng dẫn viên Outbound
- **Môi trường hoạt động:** Sử dụng smartphone (iOS/Android), mạng 4G chuyển vùng quốc tế hoặc Wi-Fi du lịch với độ trễ biến động.
- **Kênh tiếp nhận liên kết:** Nhấp trực tiếp vào đường link gửi trong nhóm chat Zalo nghiệp vụ.
- **Môi trường thực thi (Runtime):** Trình duyệt nhúng Zalo (Zalo In-App WebView) hoặc Safari/Chrome Mobile.
- **Hành vi thao tác:** Muốn thao tác nhanh chóng bằng ngón tay cái, các lựa chọn rõ ràng, không muốn phải gõ bàn phím quá nhiều trừ các câu hỏi đề xuất chiến lược.

---

## 3. Scope of Work (Phạm vi dự án)

```
                       [ZALO IN-APP WEBVIEW / MOBILE BROWSER]
                                          │
                                          ▼
                      ┌───────────────────────────────────────┐
                      │    Gplus Responsive Survey Web App    │
                      │   - 06 Modules / 25 Data Points       │
                      │   - Client-side Form Validation       │
                      │   - State Management (Thank-you Page) │
                      └───────────────────┬───────────────────┘
                                          │
                        POST Payload (JSON / Form-Data)
                                          ▼
                      ┌───────────────────────────────────────┐
                      │    Headless Form Endpoint / Edge      │
                      │   (FormSubmit / Serverless Routing)   │
                      └───────────────────┬───────────────────┘
                                          │
                        Structured Email (HTML Table)
                                          ▼
                      ┌───────────────────────────────────────┐
                      │   dat@grandk.org (Ops Mailbox) │
                      └───────────────────────────────────────┘
```

### 3.1. Phạm vi thực hiện (In-Scope)
- Xây dựng giao diện Web Form đơn trang (Single-Page Form) tối ưu 100% Mobile UI/UX.
- Tích hợp đầy đủ 06 modules khảo sát chuyên sâu (25 câu hỏi định lượng & định tính).
- Tích hợp bộ giải pháp bắt lỗi đầu vào phía Client (Form Validation).
- Định tuyến tự động dữ liệu khảo sát về địa chỉ email: `dat@grandk.org`.
- Đóng gói mã nguồn tĩnh (Static Bundle) sẵn sàng CI/CD hoặc kéo thả triển khai trực tiếp lên Vercel Edge Platform.

### 3.2. Phạm vi loại trừ (Out-of-Scope)
- Không xây dựng hệ thống cơ sở dữ liệu quan hệ (SQL/NoSQL) riêng biệt nhằm tối giản kiến trúc.
- Không yêu cầu tính năng Authentication / Quản lý phân quyền tài khoản người dùng.
- Không xây dựng Dashboard trực quan hóa dữ liệu thời gian thực (Dữ liệu sẽ được tổng hợp qua email hoặc trích xuất Spreadsheet sau).

---

## 4. Functional Requirements (FR)

### FR-01: Kiến trúc Biểu mẫu Phân đoạn (Modular Architecture)
Hệ thống phải phân chia rõ ràng thành 06 khối nội dung nghiệp vụ:
1. **Module 1 - Thông tin định danh:** Thu thập Họ tên HDV và số lần từng dẫn đoàn ghé hệ thống mua sắm Alexander (Fuji/Kyoto).
2. **Module 2 - Đánh giá cửa hàng Fuji:** Đánh giá hiệu quả tổng quan, tỷ lệ mua hàng (conversion rate), nhóm sản phẩm thế mạnh, ưu điểm vận hành, rào cản chuyển đổi, mức độ phối hợp và đề xuất riêng cho Fuji.
3. **Module 3 - Đánh giá cửa hàng Kyoto:** Bộ tiêu chí song song với Fuji phục vụ phân tích đối chiếu.
4. **Module 4 - Đánh giá So sánh (Comparative Analysis):** Đánh giá điểm đến có hiệu quả vượt trội và nguyên nhân cốt lõi.
5. **Module 5 - Đề xuất Chiến lược:** Khảo sát nhu cầu hỗ trợ từ Công ty, giải pháp mong muốn từ phía Cửa hàng, thời lượng shopping tối ưu, kịch bản giới thiệu và cơ chế hợp tác 3 bên.
6. **Module 6 - Cam kết & Ý kiến tổng kết:** Khảo sát mức độ sẵn sàng thích ứng với quy trình mới và không gian đóng góp ý kiến tự do.

### FR-02: Cơ chế Input & Tùy chọn Mở rộng (Field Types & Dynamic 'Other')
- **Single-choice (Radio Button):** Dành cho các chỉ số đánh giá thang đo mức độ, tỷ lệ phần trăm ước tính, điểm đến vượt trội.
- **Multi-choice (Checkbox Group):** Dành cho các câu hỏi đa tiêu chí (danh mục sản phẩm, điểm đang làm tốt, nguyên nhân khách không mua).
- **Dynamic 'Other' Input:** Tại các câu hỏi chọn nhiều, khi người dùng tích chọn "Khác / Ý kiến khác", hệ thống tự động hiển thị hoặc kích hoạt trường `text-input` tương ứng để nhập dữ liệu bổ sung.
- **Free-text Area:** Ô nhập liệu đa dòng dành cho các câu hỏi mang tính hiến kế, kịch bản thuyết minh và chia sẻ kinh nghiệm thực tế.

### FR-03: Kiểm soát Hợp lệ Dữ liệu (Validation Rules)
- Chặn hành vi nộp form trống (Prevent empty submission).
- Bắt buộc hoàn thành các trường định danh cơ bản: Họ tên HDV, Tần suất dẫn tour, Đánh giá tổng quan.
- Cảnh báo trực quan (Visual Feedback) dưới dạng viền đỏ hoặc thông báo lỗi ngay dưới trường dữ liệu chưa đạt yêu cầu.

### FR-04: Dispatching & Định tuyến Dữ liệu Tự động
- Payload đóng gói toàn bộ key-value của 25 câu hỏi khảo sát.
- Hệ thống gửi trực tiếp tới dịch vụ tiếp nhận mà không làm lộ credentials nhạy cảm.
- Email gửi về `dat@grandk.org` phải hiển thị rõ tiêu đề: `[GPLUS SURVEY] Khảo sát Shopping Nhật Bản - HDV: {Tên_HDV}`.

### FR-05: Trạng thái Hoàn tất & Phòng chống Spam (Post-Submit & Anti-spam)
- Ngăn chặn tình trạng double-click / multiple submission bằng cách disable nút "Gửi khảo sát" ngay khi tiến trình submit bắt đầu.
- Hiển thị màn hình xác nhận chuyên nghiệp (Success Modal / Thank You State) ngay sau khi gửi thành công.
- Tích hợp cơ chế Honeypot ẩn nhằm ngăn chặn bot crawl tự động điền form rác trên Internet.

---

## 5. Non-Functional Requirements (NFR)

### NFR-01: Giao diện & Trải nghiệm Người dùng (UI/UX)
- **Design Language:** Phong cách thiết kế hiện đại, phối hợp màu nhận diện thương hiệu Gplus Travel (Navy / Blue) kết hợp điểm nhấn văn hóa Nhật Bản (Sakura / Clean minimalist).
- **Touch Ergonomics:** Chiều cao các button và radio item tối thiểu **44px** (chuẩn Apple HIG) đảm bảo bấm chạm chính xác trên màn hình cảm ứng nhỏ.
- **Font Stack:** Sử dụng phông chữ Unicode không chân tiêu chuẩn (Inter, Roboto, SF Pro) hiển thị sắc nét tiếng Việt có dấu.

### NFR-02: Tương thích Môi trường (Compatibility)
- Tương thích 100% với trình duyệt tích hợp Zalo (Zalo In-App Browser) trên cả hai hệ điều hành iOS và Android.
- Tương thích các trình duyệt di động tiêu chuẩn: Safari, Google Chrome, Samsung Internet.

### NFR-03: Hiệu năng & Tải trang (Performance)
- Tổng dung lượng tải trang (Bundle Size): **< 150 KB** (nén Gzip/Brotli).
- Chỉ số First Contentful Paint (FCP): **< 1.2s** trên mạng di động 4G.
- Time to Interactive (TTI): **< 1.8s**.

### NFR-04: Khả năng Bảo trì & Triển khai (Maintainability & Deployment)
- Kiến trúc Single Static HTML / Component-based Static App: Không phụ thuộc vào cơ sở dữ liệu backend phức tạp.
- Khả năng triển khai One-Click Deployment lên nền tảng đám mây Vercel, Cloudflare Pages hoặc Netlify.
- Dễ dàng thay đổi nội dung câu hỏi hoặc bổ sung điểm shopping mới bằng cách chỉnh sửa trực tiếp file cấu hình tĩnh.

---

## 6. Acceptance Criteria (Tiêu chí Nghiệm thu)

| ID | Tiêu chí nghiệm thu (Scenario) | Điều kiện đạt (Pass Criteria) |
| :--- | :--- | :--- |
| **AC-01** | Khởi chạy qua link Zalo | Mở mượt mà trên Zalo WebView của điện thoại, không vỡ layout, không yêu cầu đăng nhập. |
| **AC-02** | Ràng buộc trường bắt buộc | Nhấn nút nộp khi chưa nhập Tên HDV -> Hệ thống cuộn đến vị trí lỗi và hiển thị cảnh báo đỏ. |
| **AC-03** | Xử lý tùy chọn "Khác" | Chọn "Khác" tại Câu 5, 7, 12, 14... -> Cho phép nhập chi tiết nội dung và gửi đi trọn vẹn. |
| **AC-04** | Tiếp nhận Email tức thì | Nhấn gửi thành công -> Hộp thư `dat@grandk.org` nhận được email định dạng bảng biểu đầy đủ trong vòng 30 giây. |
| **AC-05** | Chống gửi trùng lặp | Nút gửi bị vô hiệu hóa kèm trạng thái xoay vòng (loading spinner) trong quá trình truyền dữ liệu. |
| **AC-06** | Deploy Vercel thành công | Kéo thả thư mục chứa mã nguồn lên Vercel -> Tạo link `.vercel.app` hoạt động ổn định 24/7. |

---

## 7. Sign-off & Bàn giao
- **Đại diện Kỹ thuật:** Tech Lead / Product Engineer.
- **Đại diện Nghiệp vụ:** Gplus Travel Operations Team.
- **Tài liệu tham chiếu kèm theo:** `FORM_SCHEMA_AND_PAYLOAD_SPEC.md` (Đặc tả chi tiết Data Dictionary & Email Mapping).
