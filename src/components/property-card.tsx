// src/components/PropertyCard.tsx
import React from 'react';

export interface PropertyCardProps {
  id: string | number;
  title: string;
  location: string;
  area: string;
  bedrooms: string;
  parking: string;
  price: string;
  image: string;
  period: string;
  badge?: string;
  itemsPerView?: number;
  gap?: number;
  onViewProperty?: (id: string | number) => void;
  className?: string;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  id,
  title,
  location,
  area,
  bedrooms,
  parking,
  price,
  image,
  period,
  badge = 'ویژه',
  itemsPerView = 3,
  gap = 24,
  onViewProperty,
  className = '',
}) => {
  const cardWidth = `calc(${100 / itemsPerView}% - ${((itemsPerView - 1) * (itemsPerView === 1 ? 0 : gap)) / itemsPerView}px)`;

  const formatPrice = (price: string) => {
    return parseInt(price).toLocaleString('fa-IR');
  };

  const handleViewProperty = () => {
    if (onViewProperty) {
      onViewProperty(id);
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
          className="w-full h-48 md:h-56 object-cover"
          loading="lazy"
        />
        {badge && (
          <div className="absolute top-3 right-3 bg-[#FFB53F] text-gray-900 px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-bold">
            {badge}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 md:p-5">
        <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2 line-clamp-1">
          {title}
        </h3>
        <p className="text-xs md:text-sm text-gray-500 mb-4 line-clamp-1">
          {location}
        </p>

        {/* Features */}
        <div className="flex justify-between items-center mb-4 text-xs md:text-sm text-gray-600 border-t border-gray-100 pt-4">
          <span className="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
            </svg>
            {area}
          </span>
          <span className="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1m-2 0h2" />
            </svg>
            {bedrooms}
          </span>
          <span className="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v16h16V4H4z M8 8h8v2H8z M8 12h8v2H8z" />
            </svg>
            {parking}
          </span>
        </div>

        {/* Price */}
        <div className="flex justify-between items-center">
          <div>
            <span className="text-sm md:text-lg font-bold text-gray-900">
              {formatPrice(price)}
            </span>
            <span className="text-xs md:text-sm text-gray-500 mr-1">تومان</span>
          </div>
          <span className="text-xs md:text-sm text-gray-500">
            {period}
          </span>
        </div>

        {/* View Button - اضافه شده برای هماهنگی با کارت‌های دیگر */}
        <button
          onClick={handleViewProperty}
          className="w-full mt-4 bg-[#182338] text-white text-xs md:text-sm font-bold py-2 rounded-lg hover:bg-[#2a3f5e] transition-colors duration-300"
        >
          مشاهده ملک
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;