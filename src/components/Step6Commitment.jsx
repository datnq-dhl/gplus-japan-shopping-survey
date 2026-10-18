import React from 'react';
import QuestionCard from './QuestionCard';
import { RadioCard } from './FormControls';

const READINESS_OPTS = [
  'Sẵn sàng hoàn toàn',
  'Sẵn sàng nếu có hướng dẫn cụ thể',
  'Cần trao đổi thêm trước khi quyết định',
  'Chưa sẵn sàng vào thời điểm này'
];

export default function Step6Commitment({ data, onChange, errors }) {
  return (
    <div className="space-y-4">
      {/* C24 */}
      <QuestionCard
        qNum="C24"
        title="Anh/chị có sẵn sàng thử nghiệm những phương án shopping mới nếu Công ty triển khai không?"
        required
        error={errors.readiness_to_test}
      >
        <div className="space-y-2.5">
          {READINESS_OPTS.map(opt => (
            <RadioCard
              key={opt}
              label={opt}
              selected={data.readiness_to_test === opt}
              onSelect={() => onChange('readiness_to_test', opt)}
              error={!!errors.readiness_to_test}
            />
          ))}
        </div>
      </QuestionCard>

      {/* C25 */}
      <QuestionCard
        qNum="C25"
        title="Ý kiến, kinh nghiệm thực tế hoặc đề xuất khác của anh/chị:"
        subtitle="Mọi đóng góp chân thành của anh/chị đều được trân trọng lắng nghe"
      >
        <textarea
          rows={4}
          value={data.final_feedback || ''}
          onChange={(e) => onChange('final_feedback', e.target.value)}
          placeholder="Chia sẻ thêm bất kỳ khó khăn hoặc góc nhìn nào anh/chị muốn gửi tới Ban Điều Hành Gplus Travel..."
          className="w-full p-3.5 text-sm sm:text-base bg-slate-50/70 border-2 border-slate-200 rounded-xl focus:bg-white focus:border-brand-navy focus:ring-4 focus:ring-blue-100 transition-all outline-none text-slate-800 placeholder-slate-400"
        />
      </QuestionCard>
    </div>
  );
}
