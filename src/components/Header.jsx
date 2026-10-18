import React from 'react';

export default function Header({ currentStep, totalSteps }) {
  const percentage = Math.round((currentStep / totalSteps) * 100);

  return (
    <header className="sticky top-0 z-50 bg-[#0C2461] text-white shadow-lg pt-[env(safe-area-inset-top,0px)]">
      <div className="max-w-xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
        {/* Brand Logo & Name */}
        <div className="flex items-center gap-3 min-w-0">
          <img
            src="/logo.jpg"
            alt="Gplus Travel"
            className="w-10 h-10 rounded-xl object-contain bg-white p-1 shadow-sm flex-shrink-0"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
          <div className="min-w-0">
            <h1 className="text-sm font-bold tracking-tight text-white flex items-center gap-1.5">
              <span>Gplus Travel</span>
              <span className="text-[10px] uppercase font-semibold bg-white/15 text-pink-200 px-1.5 py-0.5 rounded">
                Japan Tour
              </span>
            </h1>
            <p className="text-xs text-blue-200/80 truncate">
              Khảo sát nâng cao chất lượng điểm shopping
            </p>
          </div>
        </div>

        {/* Step Badge */}
        <div className="flex-shrink-0 bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full text-xs font-bold text-white shadow-sm flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-pink-400 animate-pulse"></span>
          <span>Bước {currentStep}/{totalSteps}</span>
        </div>
      </div>

      {/* Progress Track */}
      <div className="w-full bg-black/20 h-1.5 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-brand-sakura via-pink-400 to-rose-400 transition-all duration-500 ease-out rounded-r-full"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </header>
  );
}
