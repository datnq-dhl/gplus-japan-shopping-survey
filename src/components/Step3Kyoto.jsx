import React from 'react';
import QuestionCard from './QuestionCard';
import { RadioCard, CheckboxCard } from './FormControls';

const EFFICIENCY_OPTS = ['Rất tốt', 'Tốt', 'Bình thường', 'Chưa tốt', 'Kém hiệu quả'];
const CONVERSION_OPTS = ['Dưới 10%', '10–30%', '31–50%', '51–70%', 'Trên 70%'];
const POPULAR_PRODUCTS = [
  'Matcha/Trà xanh các loại',
  'Bánh kẹo vị trà',
  'Mỹ phẩm từ trà xanh',
  'Thực phẩm chức năng',
  'Bộ ấm chén/dụng cụ pha trà',
  'Quà lưu niệm/đồ thủ công',
  'Khác'
];
const POSITIVE_POINTS = [
  'Chất lượng và đa dạng sản phẩm',
  'Giá cả hợp lý',
  'Thái độ phục vụ của nhân viên',
  'Không gian và cách bài trí cửa hàng',
  'Trải nghiệm thử trà đạo thu hút',
  'Khác'
];
const BARRIERS = [
  'Giá bán cao so với mặt bằng chung',
  'Sản phẩm chưa phù hợp thị hiếu khách Việt',
  'Nhân viên chưa nhiệt tình hoặc thiếu hỗ trợ tiếng Việt',
  'Thời gian ghé điểm shopping quá ngắn',
  'Khách trong đoàn không có nhu cầu mua sắm',
  'Khác'
];

export default function Step3Kyoto({ data, onChange, onToggleList, errors }) {
  return (
    <div className="space-y-4">
      {/* C10 */}
      <QuestionCard
        qNum="C10"
        title="Anh/chị đánh giá hiệu quả shopping tại cửa hàng Kyoto như thế nào?"
        required
        error={errors.kyoto_efficiency}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {EFFICIENCY_OPTS.map(opt => (
            <RadioCard
              key={opt}
              label={opt}
              selected={data.kyoto_efficiency === opt}
              onSelect={() => onChange('kyoto_efficiency', opt)}
              error={!!errors.kyoto_efficiency}
            />
          ))}
        </div>
      </QuestionCard>

      {/* C11 */}
      <QuestionCard
        qNum="C11"
        title="Tỷ lệ khách mua hàng tại cửa hàng Kyoto ước tính là bao nhiêu?"
        required
        error={errors.kyoto_conversion_rate}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {CONVERSION_OPTS.map(opt => (
            <RadioCard
              key={opt}
              label={opt}
              selected={data.kyoto_conversion_rate === opt}
              onSelect={() => onChange('kyoto_conversion_rate', opt)}
              error={!!errors.kyoto_conversion_rate}
            />
          ))}
        </div>
      </QuestionCard>

      {/* C12 */}
      <QuestionCard
        qNum="C12"
        title="Những sản phẩm nào được khách quan tâm hoặc mua nhiều nhất tại Kyoto?"
        subtitle="Có thể chọn nhiều mục"
      >
        <div className="space-y-2">
          {POPULAR_PRODUCTS.map(opt => {
            const isChecked = (data.kyoto_popular_products || []).includes(opt);
            return (
              <CheckboxCard
                key={opt}
                label={opt}
                checked={isChecked}
                onToggle={() => onToggleList('kyoto_popular_products', opt)}
                isOther={opt === 'Khác'}
                otherValue={data.kyoto_popular_products_other}
                onOtherChange={(val) => onChange('kyoto_popular_products_other', val)}
              />
            );
          })}
        </div>
      </QuestionCard>

      {/* C13 */}
      <QuestionCard
        qNum="C13"
        title="Những điểm tích cực tại cửa hàng Kyoto là gì?"
        subtitle="Có thể chọn nhiều mục"
      >
        <div className="space-y-2">
          {POSITIVE_POINTS.map(opt => {
            const isChecked = (data.kyoto_positive_points || []).includes(opt);
            return (
              <CheckboxCard
                key={opt}
                label={opt}
                checked={isChecked}
                onToggle={() => onToggleList('kyoto_positive_points', opt)}
                isOther={opt === 'Khác'}
                otherValue={data.kyoto_positive_points_other}
                onOtherChange={(val) => onChange('kyoto_positive_points_other', val)}
              />
            );
          })}
        </div>
      </QuestionCard>

      {/* C14 */}
      <QuestionCard
        qNum="C14"
        title="Những khó khăn/rào cản chính khi khách mua hàng tại Kyoto là gì?"
        subtitle="Có thể chọn nhiều mục"
      >
        <div className="space-y-2">
          {BARRIERS.map(opt => {
            const isChecked = (data.kyoto_barriers || []).includes(opt);
            return (
              <CheckboxCard
                key={opt}
                label={opt}
                checked={isChecked}
                onToggle={() => onToggleList('kyoto_barriers', opt)}
                isOther={opt === 'Khác'}
                otherValue={data.kyoto_barriers_other}
                onOtherChange={(val) => onChange('kyoto_barriers_other', val)}
              />
            );
          })}
        </div>
      </QuestionCard>

      {/* C15 */}
      <QuestionCard
        qNum="C15"
        title="Đề xuất cụ thể để cải thiện hoạt động shopping tại Kyoto:"
        subtitle="Ý kiến thực tế từ kinh nghiệm dẫn đoàn của anh/chị"
      >
        <textarea
          rows={3}
          value={data.kyoto_improvement_notes || ''}
          onChange={(e) => onChange('kyoto_improvement_notes', e.target.value)}
          placeholder="Ví dụ: Cần tăng tốc độ thanh toán thẻ/QR, bố trí ghế nghỉ ngơi cho khách lớn tuổi..."
          className="w-full p-3.5 text-sm sm:text-base bg-slate-50/70 border-2 border-slate-200 rounded-xl focus:bg-white focus:border-brand-navy focus:ring-4 focus:ring-blue-100 transition-all outline-none text-slate-800 placeholder-slate-400"
        />
      </QuestionCard>
    </div>
  );
}
