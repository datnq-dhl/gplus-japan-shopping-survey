/**
 * Formats multi-select values, merging custom "Khác" text directly
 * to avoid empty rows in the destination email table.
 */
function formatSelections(list = [], otherText = '') {
  if (!Array.isArray(list) || list.length === 0) return '(Không chọn)';
  
  const formatted = list.map(item => {
    if (item === 'Khác' && otherText && otherText.trim()) {
      return `Khác (${otherText.trim()})`;
    }
    return item;
  });

  return formatted.join(', ');
}

/**
 * Transforms raw form state into clean, human-readable labels
 * so the email table received at dat@grandk.org has clear Vietnamese headers.
 */
export function buildEmailPayload(formData) {
  const hdvName = (formData.hdv_fullname || '').trim();

  return {
    _subject: `[GPLUS KHẢO SÁT] Shopping Tour Nhật Bản - HDV: ${hdvName}`,
    _template: 'table',
    _captcha: 'false',
    _honey: '',

    // ── Module 1: Thông tin HDV
    'C01. Họ và tên Hướng dẫn viên': hdvName,
    'C02. Tần suất dẫn đoàn ghé điểm trà đạo': formData.visit_frequency || '',

    // ── Module 2: Điểm Fuji
    'C03. [Fuji] Đánh giá hiệu quả shopping': formData.fuji_efficiency || '',
    'C04. [Fuji] Tỷ lệ khách mua hàng ước tính': formData.fuji_conversion_rate || '',
    'C05. [Fuji] Sản phẩm khách quan tâm nhiều nhất': formatSelections(
      formData.fuji_popular_products,
      formData.fuji_popular_products_other
    ),
    'C06. [Fuji] Điểm tích cực nổi bật': formatSelections(
      formData.fuji_positive_points,
      formData.fuji_positive_points_other
    ),
    'C07. [Fuji] Rào cản & Khó khăn mua sắm': formatSelections(
      formData.fuji_barriers,
      formData.fuji_barriers_other
    ),
    'C08. [Fuji] Đánh giá sự hỗ trợ của điểm bán': formData.fuji_cooperation_rating || '',
    'C09. [Fuji] Góp ý cải thiện điểm Fuji': (formData.fuji_improvement_notes || '').trim() || '(Không có ý kiến)',

    // ── Module 3: Điểm Kyoto
    'C10. [Kyoto] Đánh giá hiệu quả shopping': formData.kyoto_efficiency || '',
    'C11. [Kyoto] Tỷ lệ khách mua hàng ước tính': formData.kyoto_conversion_rate || '',
    'C12. [Kyoto] Sản phẩm khách quan tâm nhiều nhất': formatSelections(
      formData.kyoto_popular_products,
      formData.kyoto_popular_products_other
    ),
    'C13. [Kyoto] Điểm tích cực nổi bật': formatSelections(
      formData.kyoto_positive_points,
      formData.kyoto_positive_points_other
    ),
    'C14. [Kyoto] Rào cản & Khó khăn mua sắm': formatSelections(
      formData.kyoto_barriers,
      formData.kyoto_barriers_other
    ),
    'C15. [Kyoto] Góp ý cải thiện điểm Kyoto': (formData.kyoto_improvement_notes || '').trim() || '(Không có ý kiến)',

    // ── Module 4: So sánh trực tiếp
    'C16. So sánh điểm shopping tốt hơn': formData.comparison_better_point || '',
    'C17. Lý do đánh giá điểm tốt hơn': formatSelections(
      formData.comparison_reasons,
      formData.comparison_reasons_other
    ),

    // ── Module 5: Đề xuất chiến lược
    'C18. Hỗ trợ cần từ phía Công ty Gplus': formatSelections(
      formData.support_from_company,
      formData.support_from_company_other
    ),
    'C19. Hỗ trợ cần từ phía Cửa hàng shopping': formatSelections(
      formData.support_from_store,
      formData.support_from_store_other
    ),
    'C20. Thời lượng shopping lý tưởng': formData.ideal_duration || '',
    'C21. Chiến lược giới thiệu & Kịch bản tư vấn': (formData.pitching_strategy || '').trim() || '(Không có ý kiến)',
    'C22. Chính sách hoa hồng & Động lực HDV': (formData.partnership_policy || '').trim() || '(Không có ý kiến)',
    'C23. TOP 3 giải pháp cải thiện cấp thiết': (formData.top3_solutions || '').trim() || '(Không có ý kiến)',

    // ── Module 6: Tổng kết & Cam kết
    'C24. Mức độ sẵn sàng thử nghiệm': formData.readiness_to_test || '',
    'C25. Ý kiến, kinh nghiệm thực tế & Góp ý khác': (formData.final_feedback || '').trim() || '(Không có ý kiến)',
  };
}

/**
 * Submit survey to FormSubmit API endpoint
 */
export async function submitSurvey(formData) {
  const payload = buildEmailPayload(formData);
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 25000);

  try {
    const res = await fetch('https://formsubmit.co/ajax/dat@grandk.org', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    let result = {};
    try {
      result = await res.json();
    } catch (_) {}

    if (res.ok || result.success === 'true' || result.success === true) {
      return { success: true };
    } else {
      throw new Error(result.message || `Server responded with status ${res.status}`);
    }
  } catch (err) {
    clearTimeout(timeoutId);
    throw err;
  }
}
