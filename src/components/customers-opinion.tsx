import { useState } from "react";

const testimonials = [
  {
    name: "امین حسینی",
    text: "اطلاعات دقیق و تسلط عالی به بازار املاک اصفهان. داشت امتح به سودمانس معرّف می‌کنم",
  },
  {
    name: "سارا محمدی",
    text: "خدمات عالی و پشتیبانی فوق‌العاده. حتماً به دوستانم پیشنهاد می‌کنم",
  },
  {
    name: "علی رضایی",
    text: "بسیار راضی بودم از نحوه برخورد و تخصص تیم. موفق باشید",
  },
  {
    name: "مریم کریمی",
    text: "تجربه‌ای عالی بود. سرعت عمل و دقت در کار تحسین‌برانگیز است",
  },
  {
    name: "حسن احمدی",
    text: "بهترین خدماتی که دریافت کردم. ممنون از زحمات شما",
  },
];

function UserIcon() {
  return (
    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gray-300">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-gray-600"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
}

function TestimonialCard({ name, text, featured = false }) {
  return (
    <div
      className={`rounded-xl bg-white px-6 py-8 text-center transition-all duration-300 h-full
        ${
          featured
            ? "shadow-xl -translate-y-2 ring-1 ring-gray-100"
            : "shadow-md hover:shadow-lg"
        }`}
    >
      <UserIcon />
      <h3 className="mb-3 text-lg font-bold text-gray-800">{name}</h3>
      <p className="text-sm leading-7 text-gray-600">{text}</p>
    </div>
  );
}

function ArrowLeft() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 19l-7-7 7-7"
      />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 5l7 7-7 7"
      />
    </svg>
  );
}

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;
  const isSlider = testimonials.length > itemsPerPage;

  const nextSlide = () => {
    if (currentIndex < testimonials.length - itemsPerPage) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const visibleTestimonials = isSlider
    ? testimonials.slice(currentIndex, currentIndex + itemsPerPage)
    : testimonials;

  return (
    <section
      dir="rtl"
      className="min-h-screen bg-gray-50 px-4 py-16 font-sans"
    >
      {/* عنوان بخش */}
      <div className="mb-14 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900">
          نظر مشتریان
        </h2>
        <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-amber-400"></div>
      </div>

      {/* کانتینر اصلی */}
      <div className="relative mx-auto max-w-6xl">
        {/* دکمه‌های ناوبری - فقط وقتی اسلاید است نمایش داده می‌شود */}
        {isSlider && (
          <>
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className={`absolute -right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg transition-all duration-300 hover:bg-amber-400 hover:text-white
                ${currentIndex === 0 ? "opacity-50 cursor-not-allowed" : "opacity-100"}`}
              aria-label="قبلی"
            >
              <ArrowRight />
            </button>
            <button
              onClick={nextSlide}
              disabled={currentIndex >= testimonials.length - itemsPerPage}
              className={`absolute -left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg transition-all duration-300 hover:bg-amber-400 hover:text-white
                ${currentIndex >= testimonials.length - itemsPerPage ? "opacity-50 cursor-not-allowed" : "opacity-100"}`}
              aria-label="بعدی"
            >
              <ArrowLeft />
            </button>
          </>
        )}

        {/* کارت‌ها */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {visibleTestimonials.map((item, index) => (
            <div
              key={index}
              className={`transition-all duration-500 ${
                isSlider ? "animate-fadeIn" : ""
              }`}
            >
              <TestimonialCard
                name={item.name}
                text={item.text}
                featured={isSlider ? false : index === 1}
              />
            </div>
          ))}
        </div>

        {/* نشانگرهای اسلاید (Dots) */}
        {isSlider && (
          <div className="mt-8 flex justify-center gap-2">
            {Array.from({
              length: Math.ceil(testimonials.length - itemsPerPage + 1),
            }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 w-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-amber-400 w-6" : "bg-gray-300"
                }`}
                aria-label={`اسلاید ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* استایل انیمیشن */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </section>
  );
}