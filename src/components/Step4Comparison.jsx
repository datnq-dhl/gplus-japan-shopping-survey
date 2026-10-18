import React from 'react';
import QuestionCard from './QuestionCard';
import { RadioCard, CheckboxCard } from './FormControls';

const COMPARISON_OPTS = [
  'Fuji hiệu quả hơn',
  'Kyoto hiệu quả hơn',
  'Hai điểm tương đương nhau',
  'Cả hai đều chưa thực sự hiệu quả'
];

const REASONS = [
  'Vị trí và không gian thuận tiện hơn',
  'Sản phẩm đa dạng và chất lượng hơn',
  'Nhân viên tư vấn nhiệt tình và khéo léo hơn',
  'Giá cả hợp lý và dễ mua hơn',
  'Trải nghiệm thưởng trà thu hút khách hơn',
  'Khác'
];

export default function Step4Comparison({ data, onChange, onToggleList, errors }) {
  return (
    <div className="space-y-4">
      {/* C16 */}
      <QuestionCard
        qNum="C16"
        title="So sánh giữa 2 cửa hàng Fuji và Kyoto, điểm nào mang lại hiệu quả shopping tốt hơn?"
        required
        error={errors.comparison_better_point}
      >
        <div className="space-y-2.5">
          {COMPARISON_OPTS.map(opt => (
            <RadioCard
              key={opt}
              label={opt}
              selected={data.comparison_better_point === opt}
              onSelect={() => onChange('comparison_better_point', opt)}
              error={!!errors.comparison_better_point}
            />
          ))}
        </div>
      </QuestionCard>

      {/* C17 */}
      <QuestionCard
        qNum="C17"
        title="Lý do chính khiến điểm đó tốt hơn là gì?"
        subtitle="Có thể chọn nhiều mục"
      >
        <div className="space-y-2">
          {REASONS.map(opt => {
            const isChecked = (data.comparison_reasons || []).includes(opt);
            return (
              <CheckboxCard
                key={opt}
                label={opt}
                checked={isChecked}
                onToggle={() => onToggleList('comparison_reasons', opt)}
                isOther={opt === 'Khác'}
                otherValue={data.comparison_reasons_other}
                onOtherChange={(val) => onChange('comparison_reasons_other', val)}
              />
            );
          })}
        </div>
      </QuestionCard>
    </div>
  );
}
