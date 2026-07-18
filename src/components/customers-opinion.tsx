import { useState, useEffect } from "react";
interface TestimonialCardProps {
  name: string;
  text: string;
}

const testimonials = [
  { name: "امین حسینی", text: "اطلاعات دقیق و تسلط عالی به بازار املاک اصفهان. حتماً به دوستانم معرفی می‌کنم" },
  { name: "سارا محمدی", text: "خدمات عالی و پشتیبانی فوق‌العاده. حتماً به دوستانم پیشنهاد می‌کنم" },
  { name: "علی رضایی", text: "بسیار راضی بودم از نحوه برخورد و تخصص تیم. موفق باشید" },
  { name: "مریم کریمی", text: "تجربه‌ای عالی بود. سرعت عمل و دقت در کار تحسین‌برانگیز است" },
  { name: "حسن احمدی", text: "بهترین خدماتی که دریافت کردم. ممنون از زحمات شما" },
];

function UserIcon() {
  return (
    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gray-200">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
      </svg>
    </div>
  );
}

function TestimonialCard({ name, text }:TestimonialCardProps) {
  return (
    <div className="rounded-xl bg-white px-6 py-8 text-center transition-all duration-300 h-full shadow-md hover:shadow-xl border border-gray-100">
      <UserIcon />
      <h3 className="mb-3 text-lg font-bold text-gray-800">{name}</h3>
      <p className="text-sm leading-7 text-gray-600">{text}</p>
    </div>
  );
}

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const itemsPerPage = 3;
  const isSlider = testimonials.length > itemsPerPage;
  const maxIndex = Math.max(0, testimonials.length - itemsPerPage);

  // منطق Autoplay
  useEffect(() => {
    if (!isSlider || isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 3500); // تغییر اسلاید هر 3.5 ثانیه

    return () => clearInterval(interval);
  }, [isSlider, isPaused, maxIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const visibleTestimonials = isSlider
    ? testimonials.slice(currentIndex, currentIndex + itemsPerPage)
    : testimonials;

  return (
    <section 
      dir="rtl" 
      className="py-16 bg-gray-50 px-4 font-sans"
      onMouseEnter={() => setIsPaused(true)} // توقف اتوپلی هنگام هاور
      onMouseLeave={() => setIsPaused(false)} // ادامه اتوپلی پس از خروج ماوس
    >
      <div className="mb-14 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900">نظر مشتریان</h2>
        <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-[#FFB53F]"></div>
      </div>

      <div className="relative mx-auto max-w-6xl">
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

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {visibleTestimonials.map((item, index) => (
            <div key={`${currentIndex}-${index}`} className="transition-all duration-500 animate-fadeIn">
              <TestimonialCard name={item.name} text={item.text} />
            </div>
          ))}
        </div>

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
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-fadeIn { animation: fadeIn 0.5s ease-out; }
      `}</style>
    </section>
  );
}