import React from 'react';
import { ArrowLeft, ArrowRight, Send, Loader2 } from 'lucide-react';

export default function NavigationButtons({
  currentStep,
  totalSteps,
  onPrev,
  onNext,
  onSubmit,
  isSubmitting,
}) {
  const isFirstStep = currentStep === 1;
  const isLastStep = currentStep === totalSteps;

  return (
    <div className="sticky bottom-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-md border-t border-slate-200/80 px-4 py-3 sm:py-4 shadow-lg pb-[max(16px,env(safe-area-inset-bottom,16px))]">
      <div className="max-w-xl mx-auto flex items-center gap-3">
        {/* Back Button */}
        {!isFirstStep && (
          <button
            type="button"
            onClick={onPrev}
            disabled={isSubmitting}
            className="h-12 px-4 sm:px-5 rounded-xl border-2 border-slate-300 bg-white hover:bg-slate-50 text-slate-700 font-bold text-sm flex items-center gap-1.5 transition-all active:scale-95 disabled:opacity-50"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Quay lại</span>
          </button>
        )}

        {/* Next or Submit Button */}
        {!isLastStep ? (
          <button
            type="button"
            onClick={onNext}
            className="flex-1 h-12 rounded-xl bg-gradient-to-r from-brand-navy to-brand-navy-light hover:from-brand-navy-dark hover:to-brand-navy text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all active:scale-98"
          >
            <span>Tiếp theo</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        ) : (
          <button
            type="button"
            onClick={onSubmit}
            disabled={isSubmitting}
            className="flex-1 h-13 rounded-xl bg-gradient-to-r from-brand-sakura via-pink-600 to-rose-600 hover:opacity-95 text-white font-extrabold text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg shadow-pink-500/25 transition-all active:scale-98 disabled:opacity-75 disabled:pointer-events-none"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Đang gửi khảo sát...</span>
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                <span>Gửi Khảo Sát Về Điều Hành</span>
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
}
