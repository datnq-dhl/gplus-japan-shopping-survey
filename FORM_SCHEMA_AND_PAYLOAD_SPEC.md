# FORM DATA SCHEMA & PAYLOAD SPECIFICATION
## GPLUS TRAVEL - JAPAN TOUR SHOPPING SURVEY

| Metadata | Chi tiết |
| :--- | :--- |
| **Tài liệu** | Bảng đặc tả trường dữ liệu (Data Dictionary), Validation & Email Mapping |
| **Target Service** | Headless Endpoint / FormSubmit / Serverless REST API |
| **Email tiếp nhận** | `dat@grandk.org` |
| **Encoding** | `UTF-8` |

---

## 1. Data Schema Matrix (Danh mục 25 trường dữ liệu)

### MODULE 1: THÔNG TIN CHUNG (GENERAL INFO)
| Mã trường (Field ID) | Tên nhãn (Label) | Kiểu dữ liệu (UI Type) | Bắt buộc (Required) | Danh sách giá trị (Enum Values / Options) |
| :--- | :--- | :--- | :---: | :--- |
| `hdv_fullname` | Họ và tên HDV | `text` | **Yes** | Chuỗi ký tự độ dài 3-50 ký tự |
| `visit_frequency` | Tần suất dẫn đoàn ghé hệ thống Alexander | `radio` | **Yes** | `1-2 lần`, `3-5 lần`, `6-10 lần`, `Trên 10 lần` |

---

### MODULE 2: ĐÁNH GIÁ ĐIỂM SHOPPING FUJI
| Mã trường (Field ID) | Tên nhãn (Label) | Kiểu dữ liệu (UI Type) | Bắt buộc (Required) | Danh sách giá trị (Enum Values / Options) |
| :--- | :--- | :--- | :---: | :--- |
| `fuji_efficiency` | Đánh giá hiệu quả shopping tại Fuji | `radio` | **Yes** | `Rất tốt`, `Tốt`, `Bình thường`, `Chưa tốt`, `Kém hiệu quả` |
| `fuji_conversion_rate` | Tỷ lệ khách mua hàng ước tính (Fuji) | `radio` | **Yes** | `Dưới 10%`, `10-30%`, `31-50%`, `51-70%`, `Trên 70%` |
| `fuji_popular_products` | Sản phẩm khách quan tâm / mua nhiều nhất | `checkbox[]` + `text` | No | `Thực phẩm chức năng`, `Mỹ phẩm`, `Bánh kẹo vị trà`, `Bộ trà/dụng cụ`, `Quà tặng đóng gói`, `Đồ lưu niệm`, `Khác (fuji_popular_products_other)` |
| `fuji_positive_points` | Điểm đang làm tốt tại Fuji | `checkbox[]` + `text` | No | `Chất lượng/đa dạng sản phẩm`, `Giá bán & ưu đãi`, `Không gian trưng bày`, `Nhân viên tư vấn`, `Trải nghiệm thử trà đạo`, `Thời gian tham quan phù hợp`, `Khác (fuji_positive_points_other)` |
| `fuji_barriers` | Rào cản khiến khách chưa mua hoặc mua ít | `checkbox[]` + `text` | No | `Giá bán cao`, `Khách chưa hiểu công dụng/cách dùng`, `Ít quà tặng phù hợp`, `Khách không có nhu cầu`, `Thời gian shopping quá ngắn`, `Tư vấn chưa hợp khách Việt`, `Rào cản ngôn ngữ`, `Đã mua ở nơi khác`, `Bất tiện thanh toán/đóng gói`, `Khác (fuji_barriers_other)` |
| `fuji_cooperation_rating`| Đánh giá mức độ phối hợp giữa HDV và Cửa hàng | `radio` | **Yes** | `Rất tốt`, `Tốt`, `Bình thường`, `Chưa tốt`, `Kém` |
| `fuji_improvement_notes`| Ý kiến đề xuất cải thiện riêng cho Fuji | `textarea` | No | Chuỗi văn bản tự do |

---

### MODULE 3: ĐÁNH GIÁ ĐIỂM SHOPPING KYOTO
| Mã trường (Field ID) | Tên nhãn (Label) | Kiểu dữ liệu (UI Type) | Bắt buộc (Required) | Danh sách giá trị (Enum Values / Options) |
| :--- | :--- | :--- | :---: | :--- |
| `kyoto_efficiency` | Đánh giá hiệu quả shopping tại Kyoto | `radio` | **Yes** | `Rất tốt`, `Tốt`, `Bình thường`, `Chưa tốt`, `Kém hiệu quả` |
| `kyoto_conversion_rate`| Tỷ lệ khách mua hàng ước tính (Kyoto) | `radio` | **Yes** | `Dưới 10%`, `10-30%`, `31-50%`, `51-70%`, `Trên 70%` |
| `kyoto_popular_products`| Sản phẩm khách quan tâm / mua nhiều nhất | `checkbox[]` + `text` | No | `Thực phẩm chức năng`, `Mỹ phẩm`, `Bánh kẹo vị trà`, `Bộ trà/dụng cụ`, `Quà tặng đóng gói`, `Đồ lưu niệm`, `Khác (kyoto_popular_products_other)` |
| `kyoto_positive_points` | Điểm đang làm tốt tại Kyoto | `checkbox[]` + `text` | No | `Chất lượng/đa dạng sản phẩm`, `Giá bán & ưu đãi`, `Không gian trưng bày`, `Nhân viên tư vấn`, `Trải nghiệm văn hóa trà`, `Thời gian shopping`, `Khác (kyoto_positive_points_other)` |
| `kyoto_barriers` | Rào cản khiến khách chưa mua hoặc mua ít | `checkbox[]` + `text` | No | `Giá bán cao`, `Sản phẩm chưa đủ hấp dẫn`, `Đã mua tại nơi khác`, `Thiếu sản phẩm khác biệt`, `Thời gian chưa hợp lý`, `Tư vấn chưa hiệu quả`, `Rào cản ngôn ngữ`, `Khó khăn thanh toán/đóng gói`, `Khách không có nhu cầu`, `Khác (kyoto_barriers_other)` |
| `kyoto_improvement_notes`| Ý kiến đề xuất cải thiện riêng cho Kyoto | `textarea` | No | Chuỗi văn bản tự do |

---

### MODULE 4: SO SÁNH TRỰC TIẾP HAI ĐIỂM SHOPPING
| Mã trường (Field ID) | Tên nhãn (Label) | Kiểu dữ liệu (UI Type) | Bắt buộc (Required) | Danh sách giá trị (Enum Values / Options) |
| :--- | :--- | :--- | :---: | :--- |
| `comparison_better_point`| Điểm shopping có hiệu quả tốt hơn | `radio` | **Yes** | `Fuji`, `Kyoto`, `Hai điểm tương đương`, `Chưa đủ thông tin để đánh giá` |
| `comparison_reasons` | Căn cứ đánh giá điểm đến vượt trội | `checkbox[]` + `text` | No | `Giá cạnh tranh hơn`, `Sản phẩm đa dạng dễ chọn`, `Chất lượng/thương hiệu uy tín`, `Cách tư vấn tốt hơn`, `Không gian thuận tiện`, `Thời gian phù hợp hơn`, `Nhu cầu khách cao hơn`, `Khác (comparison_reasons_other)` |

---

### MODULE 5: ĐỀ XUẤT NÂNG CAO HIỆU QUẢ KINH DOANH
| Mã trường (Field ID) | Tên nhãn (Label) | Kiểu dữ liệu (UI Type) | Bắt buộc (Required) | Danh sách giá trị (Enum Values / Options) |
| :--- | :--- | :--- | :---: | :--- |
| `support_from_company` | Đề xuất Công ty hỗ trợ HDV | `checkbox[]` + `text` | No | `Tài liệu tiếng Việt`, `Bảng giá/danh mục rõ ràng`, `Thông tin nguồn gốc/cách dùng`, `Hình ảnh/video giới thiệu trước`, `Kịch bản giới thiệu dễ hiểu`, `Hướng dẫn xử lý câu hỏi khó`, `Chính sách đổi trả/thanh toán`, `Khác (support_from_company_other)` |
| `support_from_store` | Đề xuất Cửa hàng triển khai | `checkbox[]` + `text` | No | `Nhân viên hỗ trợ tiếng Việt`, `Có sản phẩm dùng thử`, `Combo quà tặng nhiều mức giá`, `Ưu đãi mua số lượng lớn`, `Bảng giá rõ ràng bằng tiếng Việt`, `Quầy sản phẩm bán chạy`, `Rút gọn thanh toán/đóng gói`, `Hỗ trợ vận chuyển`, `Khác (support_from_store_other)` |
| `ideal_duration` | Thời lượng shopping lý tưởng tại cửa hàng | `radio` | **Yes** | `Dưới 20 phút`, `20-30 phút`, `31-45 phút`, `46-60 phút`, `Trên 60 phút` |
| `pitching_strategy` | Đề xuất cách giới thiệu sản phẩm trước khi vào điểm | `textarea` | No | Chuỗi văn bản tự do |
| `partnership_policy` | Đề xuất cơ chế phối hợp Công ty - HDV - Cửa hàng | `textarea` | No | Chuỗi văn bản tự do |
| `top3_solutions` | 03 giải pháp quan trọng nhất cần ưu tiên | `textarea` | No | Chuỗi văn bản tự do |

---

### MODULE 6: TỔNG KẾT & CAM KẾT
| Mã trường (Field ID) | Tên nhãn (Label) | Kiểu dữ liệu (UI Type) | Bắt buộc (Required) | Danh sách giá trị (Enum Values / Options) |
| :--- | :--- | :--- | :---: | :--- |
| `readiness_to_test` | Mức độ sẵn sàng thử nghiệm phương án mới | `radio` | **Yes** | `Sẵn sàng`, `Sẵn sàng nếu có hướng dẫn cụ thể`, `Cần trao đổi thêm`, `Chưa sẵn sàng` |
| `final_feedback` | Kinh nghiệm thực tế hoặc đề xuất khác | `textarea` | No | Chuỗi văn bản tự do |

---

## 2. Sample JSON Submission Payload

```json
{
  "_subject": "[GPLUS SURVEY] Khảo sát Shopping Nhật Bản - HDV: Nguyễn Văn A",
  "_template": "table",
  "_captcha": "false",
  "hdv_fullname": "Nguyễn Văn A",
  "visit_frequency": "6–10 lần",
  "fuji_efficiency": "Tốt",
  "fuji_conversion_rate": "31–50%",
  "fuji_popular_products": ["Bánh kẹo, thực phẩm vị trà", "Thực phẩm chức năng", "Bộ trà, dụng cụ pha trà"],
  "fuji_popular_products_other": "",
  "fuji_positive_points": ["Trải nghiệm thử trà, giới thiệu văn hóa trà đạo", "Không gian trưng bày"],
  "fuji_barriers": ["Giá bán cao so với kỳ vọng", "Khách đã mua các sản phẩm tương tự ở nơi khác"],
  "fuji_cooperation_rating": "Tốt",
  "fuji_improvement_notes": "Nên có thêm biển chỉ dẫn và giá tiền Yên/VND rõ ràng tại các kệ bánh kẹo.",
  "kyoto_efficiency": "Bình thường",
  "kyoto_conversion_rate": "10–30%",
  "kyoto_popular_products": ["Bộ trà, dụng cụ pha trà", "Quà tặng, sản phẩm đóng gói"],
  "kyoto_positive_points": ["Trải nghiệm văn hóa trà đạo"],
  "kyoto_barriers": ["Giá bán cao", "Thời gian shopping chưa hợp lý"],
  "kyoto_improvement_notes": "Cần nhân viên hỗ trợ thanh toán nhanh bằng thẻ tín dụng và quét mã.",
  "comparison_better_point": "Fuji",
  "comparison_reasons": ["Không gian mua sắm thuận tiện", "Cách giới thiệu, tư vấn tốt hơn"],
  "support_from_company": ["Tài liệu giới thiệu sản phẩm bằng tiếng Việt", "Kịch bản giới thiệu ngắn gọn, dễ hiểu"],
  "support_from_store": ["Có combo quà tặng theo nhiều mức giá", "Có sản phẩm dùng thử", "Có nhân viên giao tiếp được bằng tiếng Việt"],
  "ideal_duration": "31–45 phút",
  "pitching_strategy": "HDV nên mở video ngắn 3 phút giới thiệu nguồn gốc trà đạo trên xe bus trước khi đến điểm 15 phút.",
  "partnership_policy": "Minh bạch chính sách thưởng doanh số trực tiếp cho HDV theo từng đoàn để tạo động lực tư vấn.",
  "top3_solutions": "1. Đưa sản phẩm dùng thử phong phú hơn. 2. Làm bảng giá tiếng Việt rõ ràng. 3. Tạo combo quà tặng nhỏ gọn dễ mang lên máy bay.",
  "readiness_to_test": "Sẵn sàng nếu có hướng dẫn cụ thể",
  "final_feedback": "Mong công ty sớm áp dụng combo để khách dễ mua làm quà."
}
```

---

## 3. Email Ingestion Template Mapping

Dữ liệu chuyển tiếp về hộp thư `dat@grandk.org` được định dạng cấu trúc bảng tự động:

```html
<table border="1" cellpadding="8" cellspacing="0" style="border-collapse: collapse; font-family: Arial, sans-serif; width: 100%;">
  <tr style="background-color: #0F172A; color: #FFFFFF;">
    <th colspan="2" style="font-size: 16px; text-align: left;">KẾT QUẢ KHẢO SÁT SHOPPING NHẬT BẢN - GPLUS TRAVEL</th>
  </tr>
  <tr>
    <td style="width: 30%; font-weight: bold; background-color: #F8FAFC;">Họ và tên HDV:</td>
    <td><strong>{{hdv_fullname}}</strong></td>
  </tr>
  <tr>
    <td style="font-weight: bold; background-color: #F8FAFC;">Tần suất dẫn tour:</td>
    <td>{{visit_frequency}}</td>
  </tr>
  <tr style="background-color: #E2E8F0; font-weight: bold;">
    <td colspan="2">ĐÁNH GIÁ ĐIỂM SHOPPING FUJI</td>
  </tr>
  <tr>
    <td style="background-color: #F8FAFC;">Hiệu quả & Tỷ lệ mua:</td>
    <td>{{fuji_efficiency}} (Ước tính: {{fuji_conversion_rate}})</td>
  </tr>
  <tr>
    <td style="background-color: #F8FAFC;">Sản phẩm quan tâm nhất:</td>
    <td>{{fuji_popular_products}}</td>
  </tr>
  <tr>
    <td style="background-color: #F8FAFC;">Rào cản khách mua:</td>
    <td>{{fuji_barriers}}</td>
  </tr>
  <tr style="background-color: #E2E8F0; font-weight: bold;">
    <td colspan="2">ĐÁNH GIÁ ĐIỂM SHOPPING KYOTO</td>
  </tr>
  <tr>
    <td style="background-color: #F8FAFC;">Hiệu quả & Tỷ lệ mua:</td>
    <td>{{kyoto_efficiency}} (Ước tính: {{kyoto_conversion_rate}})</td>
  </tr>
  <tr>
    <td style="background-color: #F8FAFC;">Sản phẩm quan tâm nhất:</td>
    <td>{{kyoto_popular_products}}</td>
  </tr>
  <tr style="background-color: #E2E8F0; font-weight: bold;">
    <td colspan="2">SO SÁNH & ĐỀ XUẤT CỐT LÕI</td>
  </tr>
  <tr>
    <td style="background-color: #F8FAFC;">Điểm đánh giá tốt hơn:</td>
    <td><span style="color: #2563EB; font-weight: bold;">{{comparison_better_point}}</span></td>
  </tr>
  <tr>
    <td style="background-color: #F8FAFC;">Thời lượng shopping lý tưởng:</td>
    <td>{{ideal_duration}}</td>
  </tr>
  <tr>
    <td style="background-color: #F8FAFC;">Top 3 giải pháp đề xuất:</td>
    <td><pre style="white-space: pre-wrap; font-family: inherit;">{{top3_solutions}}</pre></td>
  </tr>
</table>
```
