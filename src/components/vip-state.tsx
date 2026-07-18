// import { useState, useEffect } from 'react';

// const VIPProperties = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [itemsPerView, setItemsPerView] = useState(3);

//   const properties = [
//     {
//       id: 1,
//       title: 'آپارتمان سعادت آباد',
//       location: 'سعادت آباد، تهران، کوچه...',
//       area: '130 متر',
//       bedrooms: '2 خواب',
//       parking: '1 پارکینگ',
//       price: '45000000',
//       image: './images/home.jpg',
//       period: 'ماهانه',
//     },
//     {
//       id: 2,
//       title: 'آپارتمان سعادت آباد',
//       location: 'سعادت آباد، تهران، کوچه...',
//       area: '130 متر',
//       bedrooms: '2 خواب',
//       parking: '1 پارکینگ',
//       price: '45000000',
//       image: './images/home.jpg',
//       period: 'ماهانه',
//     },
//     {
//       id: 3,
//       title: 'آپارتمان سعادت آباد',
//       location: 'سعادت آباد، تهران، کوچه...',
//       area: '130 متر',
//       bedrooms: '2 خواب',
//       parking: '1 پارکینگ',
//       price: '45000000',
//       image: './images/home.jpg',
//       period: 'ماهانه',
//     },
//     {
//       id: 4,
//       title: 'پنت هاوس زعفرانیه',
//       location: 'زعفرانیه، تهران',
//       area: '250 متر',
//       bedrooms: '3 خواب',
//       parking: '2 پارکینگ',
//       price: '120000000',
//       image: './images/home.jpg',
//       period: 'ماهانه',
//     },
//     {
//       id: 5,
//       title: 'ویلای لواسان',
//       location: 'لواسان، تهران',
//       area: '400 متر',
//       bedrooms: '4 خواب',
//       parking: '3 پارکینگ',
//       price: '200000000',
//       image: './images/home.jpg',
//       period: 'ماهانه',
//     },
//   ];

//   useEffect(() => {
//     const updateItemsPerView = () => {
//       if (window.innerWidth < 768) {
//         setItemsPerView(1);
//       } else if (window.innerWidth < 1024) {
//         setItemsPerView(2);
//       } else {
//         setItemsPerView(3);
//       }
//     };

//     updateItemsPerView();
//     window.addEventListener('resize', updateItemsPerView);
//     return () => window.removeEventListener('resize', updateItemsPerView);
//   }, []);

//   const nextSlide = () => {
//     if (currentIndex < properties.length - itemsPerView) {
//       setCurrentIndex(currentIndex + 1);
//     }
//   };

//   const prevSlide = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex(currentIndex - 1);
//     }
//   };

//   const formatPrice = (price) => {
//     return parseInt(price).toLocaleString('fa-IR');
//   };

//   const canGoNext = currentIndex < properties.length - itemsPerView;
//   const canGoPrev = currentIndex > 0;

//   return (
//     <section className="w-full py-12 bg-white" dir="rtl">
//       <div className="max-w-7xl mx-auto px-4 pt-52">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
//             املاک ویژه
//           </h2>
//           <div className="relative inline-block">
//             <p className="text-lg md:text-xl text-gray-600 font-light">
//               منتخبی از بهترین املاک موجود
//             </p>
//             <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-yellow-400 rounded-full"></div>
//           </div>
//         </div>

//         {/* Slider Container */}
//         <div className="relative">
//           {/* Navigation Buttons */}
//           <button
//             onClick={prevSlide}
//             disabled={!canGoPrev}
//             className={`absolute -right-2 md:-right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-2xl md:text-3xl rounded-full transition-all duration-300 ${
//               !canGoPrev
//                 ? 'opacity-30 cursor-not-allowed text-gray-400'
//                 : 'opacity-100 text-gray-700 hover:bg-gray-100'
//             }`}
//           >
//             ‹
//           </button>

//           <button
//             onClick={nextSlide}
//             disabled={!canGoNext}
//             className={`absolute -left-2 md:-left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-2xl md:text-3xl rounded-full transition-all duration-300 ${
//               !canGoNext
//                 ? 'opacity-30 cursor-not-allowed text-gray-400'
//                 : 'opacity-100 text-gray-700 hover:bg-gray-100'
//             }`}
//           >
//             ›
//           </button>

//           {/* Cards Container */}
//           <div className="overflow-hidden mx-8 md:mx-16">
//             <div
//               className="flex gap-4 md:gap-6 transition-transform duration-500 ease-in-out"
//               style={{
//                 transform: `translateX(${currentIndex * (100 / itemsPerView)}%)`,
//               }}
//             >
//               {properties.map((property) => (
//                 <div
//                   key={property.id}
//                   className="flex-shrink-0 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer overflow-hidden"
//                   style={{
//                     width: `calc(${100 / itemsPerView}% - ${((itemsPerView - 1) * (itemsPerView === 1 ? 0 : 16)) / itemsPerView}px)`,
//                   }}
//                 >
//                   {/* Image */}
//                   <div className="relative">
//                     <img
//                       src={property.image}
//                       alt={property.title}
//                       className="w-full h-48 md:h-56 object-cover"
//                     />
//                     <div className="absolute top-3 right-3 bg-yellow-400 text-gray-900 px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-bold">
//                       ویژه
//                     </div>
//                   </div>

//                   {/* Content */}
//                   <div className="p-4 md:p-5">
//                     <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">
//                       {property.title}
//                     </h3>
//                     <p className="text-xs md:text-sm text-gray-500 mb-4">
//                       {property.location}
//                     </p>

//                     {/* Features */}
//                     <div className="flex justify-between items-center mb-4 text-xs md:text-sm text-gray-600 border-t border-gray-100 pt-4">
//                       <span>{property.area}</span>
//                       <span>{property.bedrooms}</span>
//                       <span>{property.parking}</span>
//                     </div>

//                     {/* Price */}
//                     <div className="flex justify-between items-center">
//                       <p className="text-sm md:text-lg font-bold text-gray-900">
//                         {formatPrice(property.price)} تومان
//                       </p>
//                       <span className="text-xs md:text-sm text-gray-500">
//                         {property.period}
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* View All Button */}
//         <div className="text-center mt-12">
//           <button className="bg-[#182338] text-gray-300 px-8 py-2.5 md:px-12 md:py-3 rounded-md font-medium text-base md:text-lg hover:bg-opacity-90 transition-colors duration-300">
//             مشاهده همه املاک
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default VIPProperties;



// src/components/VIPProperties.tsx
import { useState, useEffect } from 'react';
import PropertyCard from './property-card';

// تعریف نوع برای داده‌های املاک
interface Property {
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
}

const VIPProperties = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [itemsPerView, setItemsPerView] = useState(3);

  const properties: Property[] = [
    {
      id: 1,
      title: 'آپارتمان سعادت آباد',
      location: 'سعادت آباد، تهران، کوچه...',
      area: '۱۳۰ متر',
      bedrooms: '۲ خواب',
      parking: '۱ پارکینگ',
      price: '45000000',
      image: '/images/home.jpg',
      period: 'ماهانه',
      badge: 'ویژه',
    },
    {
      id: 2,
      title: 'آپارتمان سعادت آباد',
      location: 'سعادت آباد، تهران، کوچه...',
      area: '۱۳۰ متر',
      bedrooms: '۲ خواب',
      parking: '۱ پارکینگ',
      price: '45000000',
      image: '/images/home.jpg',
      period: 'ماهانه',
      badge: 'ویژه',
    },
    {
      id: 3,
      title: 'آپارتمان سعادت آباد',
      location: 'سعادت آباد، تهران، کوچه...',
      area: '۱۳۰ متر',
      bedrooms: '۲ خواب',
      parking: '۱ پارکینگ',
      price: '45000000',
      image: '/images/home.jpg',
      period: 'ماهانه',
      badge: 'ویژه',
    },
    {
      id: 4,
      title: 'پنت هاوس زعفرانیه',
      location: 'زعفرانیه، تهران',
      area: '۲۵۰ متر',
      bedrooms: '۳ خواب',
      parking: '۲ پارکینگ',
      price: '120000000',
      image: '/images/home.jpg',
      period: 'ماهانه',
      badge: 'لوکس',
    },
    {
      id: 5,
      title: 'ویلای لواسان',
      location: 'لواسان، تهران',
      area: '۴۰۰ متر',
      bedrooms: '۴ خواب',
      parking: '۳ پارکینگ',
      price: '200000000',
      image: '/images/home.jpg',
      period: 'ماهانه',
      badge: 'لوکس',
    },
  ];

  // تنظیم تعداد آیتم در هر ویو بر اساس اندازه صفحه
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  const isSlider = properties.length > itemsPerView;
  const maxIndex = Math.max(0, properties.length - itemsPerView);

  // منطق Autoplay
  useEffect(() => {
    if (!isSlider || isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000); // تغییر اسلاید هر 4 ثانیه

    return () => clearInterval(interval);
  }, [isSlider, isPaused, maxIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  // تابع برای مدیریت کلیک روی دکمه مشاهده ملک
  const handleViewProperty = (propertyId: string | number) => {
    console.log('مشاهده ملک با شناسه:', propertyId);
    // اینجا می‌توانید به صفحه ملک هدایت کنید
    // navigate(`/property/${propertyId}`);
  };

  // نمایش املاک فعلی
  const visibleProperties = isSlider
    ? properties.slice(currentIndex, currentIndex + itemsPerView)
    : properties;

  return (
    <section 
      dir="rtl" 
      className="w-full bg-white py-16 px-4 font-sans"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header - دقیقاً مشابه بخش نظرات و مقالات */}
        <div className="mb-14 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900">
            املاک ویژه
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-[#FFB53F]"></div>
         
        </div>

        <div className="relative">
          {/* دکمه‌های ناوبری - دقیقاً مشابه بخش‌های دیگر */}
          {isSlider && (
            <>
              <button
                onClick={prevSlide}
                className="absolute -right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg transition-all duration-300 hover:bg-[#FFB53F] hover:text-white text-gray-700"
                aria-label="قبلی"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="absolute -left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg transition-all duration-300 hover:bg-[#FFB53F] hover:text-white text-gray-700"
                aria-label="بعدی"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            </>
          )}

          {/* گرید کارت‌ها */}
          <div className={`grid grid-cols-1 gap-6 md:gap-8 ${
            itemsPerView === 1 ? 'md:grid-cols-1' : 
            itemsPerView === 2 ? 'md:grid-cols-2' : 
            'md:grid-cols-3'
          }`}>
            {visibleProperties.map((property, index) => (
              <div 
                key={`${currentIndex}-${index}`} 
                className="transition-all duration-500 animate-fadeIn"
              >
                <PropertyCard
                  {...property}
                  itemsPerView={1}
                  onViewProperty={handleViewProperty}
                />
              </div>
            ))}
          </div>

          {/* دکمه‌های راهنما (dots) - دقیقاً مشابه بخش‌های دیگر */}
          {isSlider && (
            <div className="mt-8 flex justify-center gap-2">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-[#FFB53F] w-6" : "bg-gray-300 w-2 hover:bg-gray-400"
                  }`}
                  aria-label={`اسلاید ${index + 1}`}
                />
              ))}
            </div>
          )}

          {/* دکمه مشاهده همه املاک */}
          <div className="text-center mt-10 md:mt-12">
            <button className="bg-[#182338] text-white px-8 py-2.5 md:px-12 md:py-3 rounded-md font-medium text-sm md:text-lg hover:bg-opacity-90 transition-colors duration-300">
              مشاهده همه املاک
            </button>
          </div>
        </div>
      </div>

      {/* استایل انیمیشن - دقیقاً مشابه بخش‌های دیگر */}
      <style>{`
        @keyframes fadeIn {
          from { 
            opacity: 0; 
            transform: translateY(20px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        .animate-fadeIn { 
          animation: fadeIn 0.5s ease-out; 
        }
      `}</style>
    </section>
  );
};

export default VIPProperties;