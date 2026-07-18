import { useState, useEffect } from 'react';
import ArticleCard from './article-card';
import axios from 'axios';
import type { Article } from '../types/type';

// تعریف نوع برای داده‌های مقالات


export default function PopularArticles() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [itemsPerView, setItemsPerView] = useState(3);

  // دریافت داده‌ها از API
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:8000/articles');
        setArticles(response.data);
        setError(null);
      } catch (err) {
        console.error('خطا در دریافت مقالات:', err);
        setError('مشکلی در دریافت مقالات وجود دارد');
        // داده‌های نمونه برای تست
        setArticles([
          {
            id: 1,
            image: '/images/home.jpg',
            date: '۵ فروردین ۱۴۰۵',
            category: 'تحلیل بازار',
            title: 'بهترین زمان خرید ملک در 1405 چه زمانی است؟',
            description: 'بررسی روند قیمت ها، رفتار بازار و نکاتی که قبل از خرید باید بدانید...',
            readTime: '۵ دقیقه مطالعه',
          },
          {
            id: 2,
            image: '/images/home.jpg',
            date: '۱۲ فروردین ۱۴۰۵',
            category: 'تحلیل بازار',
            title: 'راهنمای سرمایه‌گذاری در املاک تجاری',
            description: 'نکات مهم و استراتژی‌های موفق برای ورود به بازار املاک تجاری...',
            readTime: '۷ دقیقه مطالعه',
          },
          {
            id: 3,
            image: '/images/home.jpg',
            date: '۸ فروردین ۱۴۰۵',
            category: 'مشاوره',
            title: 'نکات کلیدی قبل از خرید آپارتمان نوساز',
            description: 'چک‌لیست کامل بررسی‌های حقوقی و فنی قبل از امضای قرارداد...',
            readTime: '۴ دقیقه مطالعه',
          },
          {
            id: 4,
            image: '/images/home.jpg',
            date: '۲۸ اسفند ۱۴۰۴',
            category: 'سرمایه‌گذاری',
            title: 'راهنمای کامل سرمایه‌گذاری در املاک مسکونی',
            description: 'نکات مهم و استراتژی‌های موفق برای ورود به بازار املاک...',
            readTime: '۶ دقیقه مطالعه',
          },
          {
            id: 5,
            image: '/images/home.jpg',
            date: '۲۰ اسفند ۱۴۰۴',
            category: 'مشاوره',
            title: 'نکات کلیدی قبل از خرید خانه',
            description: 'چک‌لیست کامل بررسی‌های حقوقی و فنی قبل از امضای قرارداد...',
            readTime: '۳ دقیقه مطالعه',
          },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

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

  const isSlider = articles.length > itemsPerView;
  const maxIndex = Math.max(0, articles.length - itemsPerView);

  // منطق Autoplay
  useEffect(() => {
    if (!isSlider || isPaused || articles.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [isSlider, isPaused, maxIndex, articles.length]);

  const nextSlide = () => {
    if (articles.length === 0) return;
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    if (articles.length === 0) return;
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  // تابع برای مدیریت کلیک روی دکمه مطالعه مقاله
  const handleReadMore = (articleId: string | number) => {
    console.log('مطالعه مقاله با شناسه:', articleId);
    // navigate(`/article/${articleId}`);
  };

  // نمایش مقالات فعلی
  const visibleArticles = isSlider
    ? articles.slice(currentIndex, currentIndex + itemsPerView)
    : articles;

  // نمایش حالت بارگذاری
  if (loading) {
    return (
      <section dir="rtl" className="w-full bg-gray-50 py-16 px-4 font-sans">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#FFB53F]"></div>
          </div>
        </div>
      </section>
    );
  }

  // نمایش خطا
  if (error) {
    return (
      <section dir="rtl" className="w-full bg-gray-50 py-16 px-4 font-sans">
        <div className="max-w-7xl mx-auto text-center">
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
            <p>{error}</p>
          </div>
        </div>
      </section>
    );
  }

  // اگر مقاله‌ای وجود نداشت
  if (articles.length === 0) {
    return (
      <section dir="rtl" className="w-full bg-gray-50 py-16 px-4 font-sans">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-500">هیچ مقاله‌ای یافت نشد</p>
        </div>
      </section>
    );
  }

  return (
    <section 
      dir="rtl" 
      className="w-full bg-gray-50 py-16 px-4 font-sans"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-14 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900">
            مقالات پربازدید
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-[#FFB53F]"></div>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-600">
            جدید ترین مقالات و تحلیل های بازار املاک
          </p>
        </div>

        <div className="relative">
          {/* دکمه‌های ناوبری */}
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
            {visibleArticles.map((article, index) => (
              <div 
                key={`${article.id}-${index}`} 
                className="transition-all duration-500 animate-fadeIn"
              >
                <ArticleCard
                  {...article}
                  itemsPerView={1}
                  onReadMore={handleReadMore}
                />
              </div>
            ))}
          </div>

          {/* دکمه‌های راهنما */}
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

          {/* دکمه مشاهده همه مقالات */}
          <div className="text-center mt-10 md:mt-12">
            <button className="bg-[#182338] text-white px-8 py-2.5 md:px-12 md:py-3 rounded-md font-medium text-sm md:text-lg hover:bg-opacity-90 transition-colors duration-300">
              مشاهده همه مقالات
            </button>
          </div>
        </div>
      </div>

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
}