import { useState, useEffect } from 'react';

const PopularArticles = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  const articles = [
    {
      id: 1,
      image: './images/home.jpg',
      date: '۱۴۰۳/۰۵/۱۵',
      category: 'تحلیل بازار',
      title: 'بهترین زمان خرید ملک در 1405 چه زمانی است؟',
      description: 'بررسی روند قیمت ها، رفتار بازار و نکاتی که قبل از خرید باید بدانید...',
    },
    {
      id: 2,
      image: './images/home.jpg',
      date: '۱۴۰۳/۰۵/۱۲',
      category: 'تحلیل بازار',
      title: 'بهترین زمان خرید ملک در 1405 چه زمانی است؟',
      description: 'بررسی روند قیمت ها، رفتار بازار و نکاتی که قبل از خرید باید بدانید...',
    },
    {
      id: 3,
      image: './images/home.jpg',
      date: '۱۴۰۳/۰۵/۰۸',
      category: 'تحلیل بازار',
      title: 'بهترین زمان خرید ملک در 1405 چه زمانی است؟',
      description: 'بررسی روند قیمت ها، رفتار بازار و نکاتی که قبل از خرید باید بدانید...',
    },
    {
      id: 4,
      image: './images/home.jpg',
      date: '۱۴۰۳/۰۴/۲۸',
      category: 'سرمایه‌گذاری',
      title: 'راهنمای کامل سرمایه‌گذاری در املاک تجاری',
      description: 'نکات مهم و استراتژی‌های موفق برای ورود به بازار املاک تجاری...',
    },
    {
      id: 5,
      image: './images/home.jpg',
      date: '۱۴۰۳/۰۴/۲۰',
      category: 'مشاوره',
      title: 'نکات کلیدی قبل از خرید آپارتمان نوساز',
      description: 'چک‌لیست کامل بررسی‌های حقوقی و فنی قبل از امضای قرارداد...',
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

  const maxIndex = Math.max(0, articles.length - itemsPerView);

  const nextSlide = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const canGoNext = currentIndex < maxIndex;
  const canGoPrev = currentIndex > 0;

  return (
    <section className="w-full bg-gray-50" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
            مقالات پربازدید
          </h2>
          <div className="relative inline-block">
            <p className="text-sm sm:text-base md:text-lg text-gray-600">
              جدید ترین مقالات و تحلیل های بازار املاک
            </p>
            <div className="absolute -bottom-2 md:-bottom-3 left-1/2 transform -translate-x-1/2 w-10 md:w-12 h-1 bg-[#FFB53F] rounded-full"></div>
          </div>
        </div>

        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            disabled={!canGoPrev}
            className={`absolute -right-2 md:-right-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center text-2xl md:text-3xl rounded-full transition-all duration-300 ${
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
            className={`absolute -left-2 md:-left-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center text-2xl md:text-3xl rounded-full transition-all duration-300 ${
              !canGoNext
                ? 'opacity-30 cursor-not-allowed text-gray-400'
                : 'opacity-100 text-gray-700 hover:bg-gray-100'
            }`}
          >
            ›
          </button>

          {/* Cards */}
          <div className="overflow-hidden mx-6 md:mx-12">
            <div
              className="flex gap-4 md:gap-6 transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(${currentIndex * (100 / itemsPerView)}%)`,
              }}
            >
              {articles.map((article) => (
                <div
                  key={article.id}
                  className="flex-shrink-0 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100"
                  style={{
                    width: `calc(${100 / itemsPerView}% - ${((itemsPerView - 1) * (itemsPerView === 1 ? 0 : 24)) / itemsPerView}px)`,
                  }}
                >
                  {/* Image */}
                  <div className="relative">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-40 sm:h-48 md:h-52 object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-4 md:p-5">
                    {/* Meta */}
                    <div className="flex justify-between items-center mb-2 md:mb-3 text-xs text-gray-500">
                      <span>{article.category}</span>
                      <span>{article.date}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-2 md:mb-3 leading-relaxed line-clamp-2">
                      {article.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs md:text-sm text-gray-500 leading-5 md:leading-6 mb-3 md:mb-4 line-clamp-2">
                      {article.description}
                    </p>

                    {/* Read More */}
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 text-xs md:text-sm font-bold text-[#182338] hover:text-[#FFB53F] transition-colors"
                    >
                      <span>مطالعه مقاله</span>
                      <span className="text-base md:text-lg">←</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-10 md:mt-12">
          <button className="bg-[#182338] text-white px-8 py-2.5 md:px-12 md:py-3 rounded-md font-medium text-sm md:text-lg hover:bg-opacity-90 transition-colors duration-300">
            مشاهده همه مقالات
          </button>
        </div>
      </div>
    </section>
  );
};

export default PopularArticles;