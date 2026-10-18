import React from 'react';
import { AlertCircle } from 'lucide-react';

export default function QuestionCard({
  qNum,
  title,
  subtitle,
  required,
  error,
  children,
}) {
  return (
    <div
      className={`bg-white rounded-2xl p-4 sm:p-5 border transition-all duration-200 shadow-soft ${
        error
          ? 'border-red-300 ring-4 ring-red-50'
          : 'border-slate-200/90 hover:border-slate-300'
      }`}
    >
      {/* Header with question number */}
      <div className="mb-3.5">
        <div className="flex items-start gap-2.5">
          <span className="inline-flex items-center justify-center px-2 py-0.5 text-xs font-bold bg-brand-navy/10 text-brand-navy rounded-md flex-shrink-0 mt-0.5">
            {qNum}
          </span>
          <h2 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
            {title}
            {required && <span className="text-rose-500 ml-1 font-bold">*</span>}
          </h2>
        </div>
        {subtitle && (
          <p className="text-xs text-slate-500 mt-1 pl-8 italic">
            {subtitle}
          </p>
        )}
      </div>

      {/* Input / Options Body */}
      <div>{children}</div>

      {/* Error message */}
      {error && (
        <div className="mt-3 flex items-center gap-2 p-2.5 bg-red-50 border border-red-200 rounded-lg text-xs text-red-600 font-medium animate-in fade-in duration-150">
          <AlertCircle className="w-4 h-4 flex-shrink-0 text-red-500" />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
}
