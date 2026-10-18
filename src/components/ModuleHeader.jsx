import React from 'react';

const MODULE_THEMES = {
  1: {
    bg: 'from-[#0C2461] to-[#1E3A8A]',
    badge: 'Định danh HDV',
    title: 'Phần 1. Thông Tin Chung',
    desc: 'Thông tin cơ bản về Hướng dẫn viên và tần suất thực tế dẫn đoàn tại Nhật Bản.'
  },
  2: {
    bg: 'from-[#0F2B5C] to-[#2563EB]',
    badge: 'Khu Vực Núi Phú Sĩ',
    title: 'Phần 2. Cửa Hàng Fuji',
    desc: 'Đánh giá hoạt động mua sắm, rào cản và sản phẩm chủ lực tại điểm trà đạo Fuji.'
  },
  3: {
    bg: 'from-[#1E1B4B] to-[#3B82F6]',
    badge: 'Khu Vực Cố Đô Kyoto',
    title: 'Phần 3. Cửa Hàng Kyoto',
    desc: 'Đánh giá hoạt động mua sắm, cơ sở vật chất và trải nghiệm tại điểm Kyoto.'
  },
  4: {
    bg: 'from-[#3B0764] to-[#7C3AED]',
    badge: 'So Sánh Trực Tiếp',
    title: 'Phần 4. So Sánh Fuji & Kyoto',
    desc: 'Đối chiếu hiệu quả thực tế giữa hai điểm đến để đúc rút bài học kinh nghiệm.'
  },
  5: {
    bg: 'from-[#064E3B] to-[#0D9488]',
    badge: 'Giải Pháp Đột Phá',
    title: 'Phần 5. Đề Xuất Chiến Lược',
    desc: 'Hiến kế cho Ban Lãnh đạo Gplus Travel và các đối tác Nhật Bản để gia tăng doanh số.'
  },
  6: {
    bg: 'from-[#7C2D12] to-[#EA580C]',
    badge: 'Đồng Hành Cùng Gplus',
    title: 'Phần 6. Tổng Kết & Cam Kết',
    desc: 'Mức độ sẵn sàng thử nghiệm các kịch bản mới và đóng góp tâm huyết cuối cùng.'
  }
};

export default function ModuleHeader({ step }) {
  const current = MODULE_THEMES[step] || MODULE_THEMES[1];

  return (
    <div className={`rounded-2xl p-4 sm:p-5 text-white bg-gradient-to-br ${current.bg} shadow-card mb-4 relative overflow-hidden transition-all duration-300`}>
      {/* Decorative backdrop glow */}
      <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10">
        <span className="inline-block text-[11px] uppercase tracking-wider font-extrabold bg-white/15 px-2.5 py-0.5 rounded-full text-pink-200 mb-2">
          {current.badge}
        </span>
        <h2 className="text-lg sm:text-xl font-extrabold tracking-tight mb-1 text-white">
          {current.title}
        </h2>
        <p className="text-xs sm:text-sm text-white/80 leading-relaxed max-w-lg">
          {current.desc}
        </p>
      </div>
    </div>
  );
}
