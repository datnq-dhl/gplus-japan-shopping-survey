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
const COOP_RATINGS = ['Rất tốt', 'Tốt', 'Bình thường', 'Cần cải thiện'];

export default function Step2Fuji({ data, onChange, onToggleList, errors }) {
  return (
    <div className="space-y-4">
      {/* C03 */}
      <QuestionCard
        qNum="C03"
        title="Anh/chị đánh giá hiệu quả shopping tại cửa hàng Fuji như thế nào?"
        required
        error={errors.fuji_efficiency}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {EFFICIENCY_OPTS.map(opt => (
            <RadioCard
              key={opt}
              label={opt}
              selected={data.fuji_efficiency === opt}
              onSelect={() => onChange('fuji_efficiency', opt)}
              error={!!errors.fuji_efficiency}
            />
          ))}
        </div>
      </QuestionCard>

      {/* C04 */}
      <QuestionCard
        qNum="C04"
        title="Tỷ lệ khách mua hàng tại cửa hàng Fuji ước tính là bao nhiêu?"
        required
        error={errors.fuji_conversion_rate}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {CONVERSION_OPTS.map(opt => (
            <RadioCard
              key={opt}
              label={opt}
              selected={data.fuji_conversion_rate === opt}
              onSelect={() => onChange('fuji_conversion_rate', opt)}
              error={!!errors.fuji_conversion_rate}
            />
          ))}
        </div>
      </QuestionCard>

      {/* C05 */}
      <QuestionCard
        qNum="C05"
        title="Những sản phẩm nào được khách quan tâm hoặc mua nhiều nhất tại Fuji?"
        subtitle="Có thể chọn nhiều mục"
      >
        <div className="space-y-2">
          {POPULAR_PRODUCTS.map(opt => {
            const isChecked = (data.fuji_popular_products || []).includes(opt);
            return (
              <CheckboxCard
                key={opt}
                label={opt}
                checked={isChecked}
                onToggle={() => onToggleList('fuji_popular_products', opt)}
                isOther={opt === 'Khác'}
                otherValue={data.fuji_popular_products_other}
                onOtherChange={(val) => onChange('fuji_popular_products_other', val)}
              />
            );
          })}
        </div>
      </QuestionCard>

      {/* C06 */}
      <QuestionCard
        qNum="C06"
        title="Những điểm tích cực tại cửa hàng Fuji là gì?"
        subtitle="Có thể chọn nhiều mục"
      >
        <div className="space-y-2">
          {POSITIVE_POINTS.map(opt => {
            const isChecked = (data.fuji_positive_points || []).includes(opt);
            return (
              <CheckboxCard
                key={opt}
                label={opt}
                checked={isChecked}
                onToggle={() => onToggleList('fuji_positive_points', opt)}
                isOther={opt === 'Khác'}
                otherValue={data.fuji_positive_points_other}
                onOtherChange={(val) => onChange('fuji_positive_points_other', val)}
              />
            );
          })}
        </div>
      </QuestionCard>

      {/* C07 */}
      <QuestionCard
        qNum="C07"
        title="Những khó khăn/rào cản chính khi khách mua hàng tại Fuji là gì?"
        subtitle="Có thể chọn nhiều mục"
      >
        <div className="space-y-2">
          {BARRIERS.map(opt => {
            const isChecked = (data.fuji_barriers || []).includes(opt);
            return (
              <CheckboxCard
                key={opt}
                label={opt}
                checked={isChecked}
                onToggle={() => onToggleList('fuji_barriers', opt)}
                isOther={opt === 'Khác'}
                otherValue={data.fuji_barriers_other}
                onOtherChange={(val) => onChange('fuji_barriers_other', val)}
              />
            );
          })}
        </div>
      </QuestionCard>

      {/* C08 */}
      <QuestionCard
        qNum="C08"
        title="Đánh giá mức độ hợp tác và hỗ trợ của nhân viên/quản lý cửa hàng Fuji:"
        required
        error={errors.fuji_cooperation_rating}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {COOP_RATINGS.map(opt => (
            <RadioCard
              key={opt}
              label={opt}
              selected={data.fuji_cooperation_rating === opt}
              onSelect={() => onChange('fuji_cooperation_rating', opt)}
              error={!!errors.fuji_cooperation_rating}
            />
          ))}
        </div>
      </QuestionCard>

      {/* C09 */}
      <QuestionCard
        qNum="C09"
        title="Đề xuất cụ thể để cải thiện hoạt động shopping tại Fuji:"
        subtitle="Ý kiến thực tế từ kinh nghiệm dẫn đoàn của anh/chị"
      >
        <textarea
          rows={3}
          value={data.fuji_improvement_notes || ''}
          onChange={(e) => onChange('fuji_improvement_notes', e.target.value)}
          placeholder="Ví dụ: Cần thêm bảng giá tiếng Việt, combo quà tặng nhỏ gọn dễ mang lên máy bay..."
          className="w-full p-3.5 text-sm sm:text-base bg-slate-50/70 border-2 border-slate-200 rounded-xl focus:bg-white focus:border-brand-navy focus:ring-4 focus:ring-blue-100 transition-all outline-none text-slate-800 placeholder-slate-400"
        />
      </QuestionCard>
    </div>
  );
}
