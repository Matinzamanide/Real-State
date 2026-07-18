import React from 'react';

export interface ArticleCardProps {
  id: string | number;
  title: string;
  description: string;
  image: string;
  category: string;
  date: string;
  /** زمان مطالعه به دقیقه */
  readTime?: string;
  itemsPerView?: number;
  gap?: number;
  onReadMore?: (id: string | number) => void;
  className?: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  id,
  title,
  description,
  image,
  date,
  readTime = `${5} مطالعه`,
  itemsPerView = 1,
  gap = 24,
  onReadMore,
  className = '',
}) => {
  // محاسبه عرض کارت بر اساس تعداد آیتم در هر ردیف
  const cardWidth = `calc(${100 / itemsPerView}% - ${((itemsPerView - 1) * (itemsPerView === 1 ? 0 : gap)) / itemsPerView}px)`;

  const handleReadMore = () => {
    if (onReadMore) {
      onReadMore(id);
    }
  };

  return (
    <div
      className={`flex-shrink-0 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100 ${className}`}
      style={{ width: cardWidth }}
    >
      {/* Image */}
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-40 sm:h-48 md:h-52 object-cover"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="p-4 md:p-5">
        {/* Meta - تغییر به حالت دوستونه با آیکون زمان مطالعه */}
        <div className="flex flex-row-reverse justify-between items-center mb-3 text-xs text-gray-500">
          <div className="flex items-center gap-1">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-3.5 w-3.5 text-gray-400" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" 
              />
            </svg>
            <span>{readTime}</span>
          </div>
          <div className="flex items-center gap-1">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-3.5 w-3.5 text-gray-400" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" 
              />
            </svg>
            <span>{date}</span>
          </div>
        </div>

        {/* Title - با فونت درشت‌تر */}
        <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3 leading-relaxed line-clamp-2">
          {title}
        </h3>

        {/* Description */}
        <p className="text-xs md:text-sm text-gray-500 leading-6 md:leading-7 mb-4 line-clamp-2">
          {description}
        </p>

        {/* Read More - با استایل جدید */}
        <button
          onClick={handleReadMore}
          className="inline-flex items-center gap-2 text-sm font-bold text-[#182338] hover:text-[#FFB53F] transition-colors group"
          aria-label={`مطالعه مقاله ${title}`}
        >
          <span>مطالعه مقاله</span>
          <span className="text-lg group-hover:translate-x-1 transition-transform duration-300">
            ←
          </span>
        </button>
      </div>
    </div>
  );
};

export default ArticleCard;