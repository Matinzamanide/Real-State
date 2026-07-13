import { useState, useEffect } from 'react';

const VIPProperties = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  const properties = [
    {
      id: 1,
      title: 'آپارتمان سعادت آباد',
      location: 'سعادت آباد، تهران، کوچه...',
      area: '130 متر',
      bedrooms: '2 خواب',
      parking: '1 پارکینگ',
      price: '45000000',
      image: './images/home.jpg',
      period: 'ماهانه',
    },
    {
      id: 2,
      title: 'آپارتمان سعادت آباد',
      location: 'سعادت آباد، تهران، کوچه...',
      area: '130 متر',
      bedrooms: '2 خواب',
      parking: '1 پارکینگ',
      price: '45000000',
      image: './images/home.jpg',
      period: 'ماهانه',
    },
    {
      id: 3,
      title: 'آپارتمان سعادت آباد',
      location: 'سعادت آباد، تهران، کوچه...',
      area: '130 متر',
      bedrooms: '2 خواب',
      parking: '1 پارکینگ',
      price: '45000000',
      image: './images/home.jpg',
      period: 'ماهانه',
    },
    {
      id: 4,
      title: 'پنت هاوس زعفرانیه',
      location: 'زعفرانیه، تهران',
      area: '250 متر',
      bedrooms: '3 خواب',
      parking: '2 پارکینگ',
      price: '120000000',
      image: './images/home.jpg',
      period: 'ماهانه',
    },
    {
      id: 5,
      title: 'ویلای لواسان',
      location: 'لواسان، تهران',
      area: '400 متر',
      bedrooms: '4 خواب',
      parking: '3 پارکینگ',
      price: '200000000',
      image: './images/home.jpg',
      period: 'ماهانه',
    },
  ];

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 768) {
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

  const nextSlide = () => {
    if (currentIndex < properties.length - itemsPerView) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const formatPrice = (price) => {
    return parseInt(price).toLocaleString('fa-IR');
  };

  const canGoNext = currentIndex < properties.length - itemsPerView;
  const canGoPrev = currentIndex > 0;

  return (
    <section className="w-full py-12 bg-white" dir="rtl">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            املاک ویژه
          </h2>
          <div className="relative inline-block">
            <p className="text-lg md:text-xl text-gray-600 font-light">
              منتخبی از بهترین املاک موجود
            </p>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-yellow-400 rounded-full"></div>
          </div>
        </div>

        {/* Slider Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            disabled={!canGoPrev}
            className={`absolute -right-2 md:-right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-2xl md:text-3xl rounded-full transition-all duration-300 ${
              !canGoPrev
                ? 'opacity-30 cursor-not-allowed text-gray-400'
                : 'opacity-100 text-gray-700 hover:bg-gray-100'
            }`}
          >
            ‹
          </button>

          <button
            onClick={nextSlide}
            disabled={!canGoNext}
            className={`absolute -left-2 md:-left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-2xl md:text-3xl rounded-full transition-all duration-300 ${
              !canGoNext
                ? 'opacity-30 cursor-not-allowed text-gray-400'
                : 'opacity-100 text-gray-700 hover:bg-gray-100'
            }`}
          >
            ›
          </button>

          {/* Cards Container */}
          <div className="overflow-hidden mx-8 md:mx-16">
            <div
              className="flex gap-4 md:gap-6 transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(${currentIndex * (100 / itemsPerView)}%)`,
              }}
            >
              {properties.map((property) => (
                <div
                  key={property.id}
                  className="flex-shrink-0 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer overflow-hidden"
                  style={{
                    width: `calc(${100 / itemsPerView}% - ${((itemsPerView - 1) * (itemsPerView === 1 ? 0 : 16)) / itemsPerView}px)`,
                  }}
                >
                  {/* Image */}
                  <div className="relative">
                    <img
                      src={property.image}
                      alt={property.title}
                      className="w-full h-48 md:h-56 object-cover"
                    />
                    <div className="absolute top-3 right-3 bg-yellow-400 text-gray-900 px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-bold">
                      ویژه
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4 md:p-5">
                    <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">
                      {property.title}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-500 mb-4">
                      {property.location}
                    </p>

                    {/* Features */}
                    <div className="flex justify-between items-center mb-4 text-xs md:text-sm text-gray-600 border-t border-gray-100 pt-4">
                      <span>{property.area}</span>
                      <span>{property.bedrooms}</span>
                      <span>{property.parking}</span>
                    </div>

                    {/* Price */}
                    <div className="flex justify-between items-center">
                      <p className="text-sm md:text-lg font-bold text-gray-900">
                        {formatPrice(property.price)} تومان
                      </p>
                      <span className="text-xs md:text-sm text-gray-500">
                        {property.period}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-[#182338] text-gray-300 px-8 py-2.5 md:px-12 md:py-3 rounded-md font-medium text-base md:text-lg hover:bg-opacity-90 transition-colors duration-300">
            مشاهده همه املاک
          </button>
        </div>
      </div>
    </section>
  );
};

export default VIPProperties;