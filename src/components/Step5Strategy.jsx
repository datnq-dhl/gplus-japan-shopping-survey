import React from 'react';
import QuestionCard from './QuestionCard';
import { RadioCard, CheckboxCard } from './FormControls';

const COMPANY_SUPPORT = [
  'Cung cấp tài liệu sản phẩm bằng tiếng Việt cho HDV',
  'Xây dựng kịch bản giới thiệu/tư vấn chuẩn',
  'Bộ hình ảnh/video chất lượng cao để giới thiệu trước trên xe',
  'Tập huấn/hướng dẫn chuyên sâu về sản phẩm trà đạo',
  'Khác'
];

const STORE_SUPPORT = [
  'Có nhân viên nói tiếng Việt hỗ trợ tư vấn tại chỗ',
  'Bảng giá rõ ràng hiển thị song ngữ Nhật - Việt / USD',
  'Sản phẩm dùng thử (sampling) phong phú hơn',
  'Thiết kế các gói combo quà tặng nhiều mức giá dễ chọn',
  'Khuyến mãi/quà tặng kèm cho hóa đơn mua sắm',
  'Khác'
];

const DURATION_OPTS = [
  'Dưới 30 phút',
  '31–45 phút',
  '46–60 phút',
  'Trên 60 phút'
];

export default function Step5Strategy({ data, onChange, onToggleList, errors }) {
  return (
    <div className="space-y-4">
      {/* C18 */}
      <QuestionCard
        qNum="C18"
        title="Để tăng hiệu quả shopping, HDV cần Công ty Gplus hỗ trợ thêm điều gì?"
        subtitle="Có thể chọn nhiều mục"
      >
        <div className="space-y-2">
          {COMPANY_SUPPORT.map(opt => {
            const isChecked = (data.support_from_company || []).includes(opt);
            return (
              <CheckboxCard
                key={opt}
                label={opt}
                checked={isChecked}
                onToggle={() => onToggleList('support_from_company', opt)}
                isOther={opt === 'Khác'}
                otherValue={data.support_from_company_other}
                onOtherChange={(val) => onChange('support_from_company_other', val)}
              />
            );
          })}
        </div>
      </QuestionCard>

      {/* C19 */}
      <QuestionCard
        qNum="C19"
        title="Theo anh/chị, phía Cửa hàng shopping cần cải thiện điều gì nhất?"
        subtitle="Có thể chọn nhiều mục"
      >
        <div className="space-y-2">
          {STORE_SUPPORT.map(opt => {
            const isChecked = (data.support_from_store || []).includes(opt);
            return (
              <CheckboxCard
                key={opt}
                label={opt}
                checked={isChecked}
                onToggle={() => onToggleList('support_from_store', opt)}
                isOther={opt === 'Khác'}
                otherValue={data.support_from_store_other}
                onOtherChange={(val) => onChange('support_from_store_other', val)}
              />
            );
          })}
        </div>
      </QuestionCard>

      {/* C20 */}
      <QuestionCard
        qNum="C20"
        title="Thời lượng ghé điểm shopping bao nhiêu là hợp lý nhất?"
        required
        error={errors.ideal_duration}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {DURATION_OPTS.map(opt => (
            <RadioCard
              key={opt}
              label={opt}
              selected={data.ideal_duration === opt}
              onSelect={() => onChange('ideal_duration', opt)}
              error={!!errors.ideal_duration}
            />
          ))}
        </div>
      </QuestionCard>

      {/* C21 */}
      <QuestionCard
        qNum="C21"
        title="Anh/chị thường tư vấn/giới thiệu với khách như thế nào trước khi vào điểm shopping?"
        subtitle="Chia sẻ kịch bản hoặc kinh nghiệm thực tế hiệu quả của anh/chị"
      >
        <textarea
          rows={3}
          value={data.pitching_strategy || ''}
          onChange={(e) => onChange('pitching_strategy', e.target.value)}
          placeholder="Ví dụ: Giới thiệu văn hóa trà đạo trên xe bus trước khi đến, hướng dẫn khách cách chọn mua matcha chuẩn Nhật..."
          className="w-full p-3.5 text-sm sm:text-base bg-slate-50/70 border-2 border-slate-200 rounded-xl focus:bg-white focus:border-brand-navy focus:ring-4 focus:ring-blue-100 transition-all outline-none text-slate-800 placeholder-slate-400"
        />
      </QuestionCard>

      {/* C22 */}
      <QuestionCard
        qNum="C22"
        title="Về chính sách hợp tác (hoa hồng/thưởng), anh/chị có đề xuất gì để tạo thêm động lực cho HDV?"
      >
        <textarea
          rows={3}
          value={data.partnership_policy || ''}
          onChange={(e) => onChange('partnership_policy', e.target.value)}
          placeholder="Đề xuất về cơ chế chiết khấu, thời gian thanh toán, mức thưởng theo doanh số đoàn..."
          className="w-full p-3.5 text-sm sm:text-base bg-slate-50/70 border-2 border-slate-200 rounded-xl focus:bg-white focus:border-brand-navy focus:ring-4 focus:ring-blue-100 transition-all outline-none text-slate-800 placeholder-slate-400"
        />
      </QuestionCard>

      {/* C23 */}
      <QuestionCard
        qNum="C23"
        title="TOP 3 việc CẦN LÀM NGAY để cải thiện doanh số shopping tại 2 điểm trà đạo:"
        subtitle="Liệt kê 3 hành động cụ thể, thiết thực nhất"
      >
        <textarea
          rows={3}
          value={data.top3_solutions || ''}
          onChange={(e) => onChange('top3_solutions', e.target.value)}
          placeholder="1. ...&#10;2. ...&#10;3. ..."
          className="w-full p-3.5 text-sm sm:text-base bg-slate-50/70 border-2 border-slate-200 rounded-xl focus:bg-white focus:border-brand-navy focus:ring-4 focus:ring-blue-100 transition-all outline-none text-slate-800 placeholder-slate-400 font-mono text-xs sm:text-sm"
        />
      </QuestionCard>
    </div>
  );
}
