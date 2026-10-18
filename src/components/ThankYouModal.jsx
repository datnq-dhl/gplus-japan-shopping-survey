import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { CheckCircle2, Mail, Sparkles } from 'lucide-react';

export default function ThankYouModal({ hdvName, onClose }) {
  useEffect(() => {
    // Fire festive confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#E91E8C', '#0C2461', '#3B82F6', '#10B981', '#F59E0B']
    });
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-slate-100 text-center relative overflow-hidden animate-in zoom-in-95 duration-300">
        {/* Glow decoration */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-24 bg-pink-100 rounded-full blur-2xl -z-0 pointer-events-none" />

        <div className="relative z-10">
          {/* Big Checkmark */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-inner">
            <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12 stroke-[2.5]" />
          </div>

          <span className="inline-flex items-center gap-1 text-xs font-bold text-pink-600 bg-pink-50 px-3 py-1 rounded-full mb-3">
            <Sparkles className="w-3.5 h-3.5" /> Gửi Khảo Sát Thành Công
          </span>

          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-2">
            Cảm ơn {hdvName || 'Anh/Chị'}!
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
            Những chia sẻ thực tế và tâm huyết của anh/chị là cơ sở quý báu để Gplus Travel nâng cao chất lượng dịch vụ, tối ưu hóa doanh số và hoàn thiện chính sách hỗ trợ HDV.
          </p>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-3.5 text-left text-xs text-slate-600 mb-6 flex items-start gap-3">
            <Mail className="w-4 h-4 text-brand-navy flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-slate-800">Email tiếp nhận kết quả:</p>
              <p className="text-brand-navy font-mono font-medium">dat@grandk.org</p>
              <p className="text-[11px] text-slate-500 mt-0.5">Bảng dữ liệu đã được định dạng chuẩn hóa và gửi tức thì về hòm thư điều hành.</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-full h-12 bg-gradient-to-r from-brand-navy to-brand-navy-light text-white font-bold rounded-xl text-sm shadow-md hover:shadow-lg active:scale-95 transition-all"
          >
            Đóng màn hình
          </button>
        </div>
      </div>
    </div>
  );
}
