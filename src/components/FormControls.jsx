import React from 'react';
import { Check } from 'lucide-react';

export function RadioCard({ selected, onSelect, label, description, error }) {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onSelect}
      onKeyDown={(e) => { if (e.key === ' ' || e.key === 'Enter') onSelect(); }}
      className={`relative flex items-center gap-3.5 p-3.5 sm:p-4 rounded-xl border-2 transition-all duration-200 cursor-pointer select-none active:scale-[0.985] min-h-[52px] ${
        selected
          ? 'bg-blue-50/70 border-brand-navy shadow-sm'
          : error
          ? 'bg-red-50/40 border-red-200 hover:border-red-300'
          : 'bg-white border-slate-200 hover:border-blue-300 hover:bg-slate-50/50'
      }`}
    >
      {/* Radio Circle */}
      <div
        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ${
          selected
            ? 'border-brand-navy bg-brand-navy'
            : 'border-slate-300 bg-white'
        }`}
      >
        <div
          className={`w-2 h-2 rounded-full bg-white transition-transform ${
            selected ? 'scale-100' : 'scale-0'
          }`}
        />
      </div>

      {/* Text Label */}
      <div className="flex-1 min-w-0">
        <span
          className={`text-sm sm:text-[15px] font-medium leading-snug block ${
            selected ? 'text-brand-navy font-semibold' : 'text-slate-800'
          }`}
        >
          {label}
        </span>
        {description && (
          <span className="text-xs text-slate-500 mt-0.5 block">{description}</span>
        )}
      </div>
    </div>
  );
}

export function CheckboxCard({
  checked,
  onToggle,
  label,
  isOther,
  otherValue,
  onOtherChange,
  placeholder = 'Nhập cụ thể ý kiến của anh/chị...'
}) {
  return (
    <div className="flex flex-col gap-2">
      <div
        role="button"
        tabIndex={0}
        onClick={onToggle}
        onKeyDown={(e) => { if (e.key === ' ' || e.key === 'Enter') onToggle(); }}
        className={`flex items-center gap-3.5 p-3.5 sm:p-4 rounded-xl border-2 transition-all duration-200 cursor-pointer select-none active:scale-[0.985] min-h-[52px] ${
          checked
            ? 'bg-blue-50/70 border-brand-navy shadow-sm'
            : 'bg-white border-slate-200 hover:border-blue-300 hover:bg-slate-50/50'
        }`}
      >
        {/* Checkbox Box */}
        <div
          className={`w-5 h-5 rounded-md border-2 flex items-center justify-center flex-shrink-0 transition-all ${
            checked
              ? 'border-brand-navy bg-brand-navy text-white'
              : 'border-slate-300 bg-white'
          }`}
        >
          <Check
            className={`w-3.5 h-3.5 stroke-[3] transition-transform ${
              checked ? 'scale-100' : 'scale-0'
            }`}
          />
        </div>

        {/* Text */}
        <span
          className={`text-sm sm:text-[15px] font-medium leading-snug flex-1 ${
            checked ? 'text-brand-navy font-semibold' : 'text-slate-800'
          }`}
        >
          {label}
        </span>
      </div>

      {/* Expandable Other Text Field */}
      {isOther && checked && (
        <div className="pl-3 sm:pl-4 animate-in fade-in slide-in-from-top-1 duration-200">
          <input
            type="text"
            value={otherValue || ''}
            onChange={(e) => onOtherChange(e.target.value)}
            placeholder={placeholder}
            autoFocus
            className="w-full h-12 px-4 text-sm sm:text-base bg-white border-2 border-brand-navy rounded-xl shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-100 text-slate-800 placeholder-slate-400"
          />
        </div>
      )}
    </div>
  );
}
