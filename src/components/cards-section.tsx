import type React from "react";

interface ICard {
    width: number;
    height: number;
    hasBorder?: boolean; // ? یعنی اختیاری
}
const MountainIcon = () => {
  return (
    <div className="relative w-32 h-32 flex items-center justify-center">
      {/* خورشید */}
      <div className="absolute top-6 right-6 w-10 h-10 bg-[#7a7575] rounded-full"></div>
      
      {/* کوه عقب (تیره) */}
      <svg
        className="absolute bottom-4 left-2 w-24 h-24 text-[#5c5858] fill-current"
        viewBox="0 0 100 100"
      >
        <polygon points="0,100 50,20 100,100" />
      </svg>
      
      {/* کوه جلو (روشن) */}
      <svg
        className="absolute bottom-4 right-4 w-24 h-20 text-[#d1d5db] fill-current"
        viewBox="0 0 100 100"
      >
        <polygon points="0,100 50,15 100,100" />
      </svg>
    </div>
  );
};

// کامپوننت کارت (قابل استفاده مجدد)
const Card :React.FC<ICard> = ({ width, height, hasBorder = false }) => {
  return (
    <div
      className={`bg-[#182338] rounded-2xl flex items-center justify-center p-4 shadow-md ${
        hasBorder ? "border-[3px] border-[#3b82f6]" : ""
      }`}
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <MountainIcon />
    </div>
  );
};

const CardsSection = () => {
  return (
    <div className="bg-white min-h-screen w-full flex items-center justify-center p-6" dir="rtl">
      {/* کانتینر اصلی کارت‌ها */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 w-full max-w-6xl">
        
        {/* کارت اول (عمودی) */}
        <Card width={330} height={389} />

        {/* کارت دوم (افقی) */}
        <Card width={430} height={316} />

        {/* کارت سوم (عمودی با حاشیه آبی) */}
        <Card width={330} height={389} hasBorder={true} />
        
      </div>
    </div>
  );
};

export default CardsSection;