import React from 'react';
import QuestionCard from './QuestionCard';
import { RadioCard } from './FormControls';
import { User, Calendar } from 'lucide-react';

const FREQUENCY_OPTIONS = [
  '1–2 lần',
  '3–5 lần',
  '6–10 lần',
  'Trên 10 lần'
];

export default function Step1General({ data, onChange, errors }) {
  return (
    <div className="space-y-4">
      {/* C01: Họ và tên HDV */}
      <QuestionCard
        qNum="C01"
        title="Họ và tên Hướng dẫn viên (HDV)"
        required
        error={errors.hdv_fullname}
      >
        <div className="relative">
          <input
            type="text"
            id="hdv_fullname"
            value={data.hdv_fullname || ''}
            onChange={(e) => onChange('hdv_fullname', e.target.value)}
            placeholder="Nhập họ và tên đầy đủ..."
            className="w-full h-13 px-4 text-sm sm:text-base bg-slate-50/70 border-2 border-slate-200 rounded-xl focus:bg-white focus:border-brand-navy focus:ring-4 focus:ring-blue-100 transition-all outline-none text-slate-800 placeholder-slate-400"
          />
          <User className="absolute right-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
        </div>
      </QuestionCard>

      {/* C02: Tần suất dẫn đoàn */}
      <QuestionCard
        qNum="C02"
        title="Anh/chị đã dẫn đoàn ghé điểm shopping trà đạo Alexander bao nhiêu lần?"
        required
        error={errors.visit_frequency}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {FREQUENCY_OPTIONS.map((opt) => (
            <RadioCard
              key={opt}
              label={opt}
              selected={data.visit_frequency === opt}
              onSelect={() => onChange('visit_frequency', opt)}
              error={!!errors.visit_frequency}
            />
          ))}
        </div>
      </QuestionCard>
    </div>
  );
}
