import { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "آیا در تمام مراحل معامله مسرتی همراه هستید؟",
      answer: "بله، در تمام مراحل از بازدید تا انتقال سند در کنار شما هستیم.",
    },
    {
      question: "آیا در تمام مراحل معامله مسرتی همراه هستید؟",
      answer: "بله، تیم ما با تجربه کامل در بازار املاک، شما را راهنمایی می‌کند.",
    },
    {
      question: "آیا در تمام مراحل معامله مسرتی همراه هستید؟",
      answer: "بله، مشاوره تخصصی و پشتیبانی کامل ارائه می‌دهیم.",
    },
    {
      question: "آیا در تمام مراحل معامله مسرتی همراه هستید؟",
      answer: "بله، از ابتدا تا انتها همراه شما خواهیم بود.",
    },
    {
      question: "آیا در تمام مراحل معامله مسرتی همراه هستید؟",
      answer: "بله، با اطمینان کامل می‌توانید روی ما حساب کنید.",
    },
  ];

  const toggleFAQ = (index:any) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="w-full py-12 md:py-16 bg-gray-50" dir="rtl">
      <div className="max-w-7xl mx-auto px-4">
        {/* عنوان */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
            سوالات متداول
          </h2>
          <p className="text-sm md:text-base text-gray-500 mb-2">
            پاسخ چهار نرین سوالاتی که مطرح می‌شود
          </p>
          <div className="w-14 h-1 bg-[#FFB53F] mx-auto rounded-full"></div>
        </div>

        {/* محتوا */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-12">
          {/* تصویر سمت چپ */}
          <div className="lg:w-1/2 w-full flex justify-center">
            <div className="bg-[#182338] rounded-2xl w-full max-w-lg h-[350px] md:h-[450px] flex items-center justify-center overflow-hidden">
              <svg
                width="250"
                height="200"
                viewBox="0 0 250 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* خورشید */}
                <circle cx="170" cy="65" r="35" fill="#9CA3AF" />
                {/* کوه عقب */}
                <polygon points="40,170 125,55 210,170" fill="#D1D5DB" />
                {/* کوه جلو */}
                <polygon points="95,170 165,80 235,170" fill="#E5E7EB" />
              </svg>
            </div>
          </div>

          {/* آکاردئون سمت راست */}
          <div className="lg:w-1/2 w-full space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`rounded-xl border-2 transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "border-[#FFB53F] bg-white shadow-md"
                      : "border-gray-100 bg-white hover:border-gray-200"
                  }`}
                >
                  {/* سوال */}
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex justify-between items-center px-5 md:px-6 py-4 md:py-5 text-right focus:outline-none"
                  >
                    <span
                      className={`font-bold text-sm md:text-base ${
                        isOpen ? "text-[#182338]" : "text-gray-700"
                      }`}
                    >
                      {faq.question}
                    </span>
                    {/* آیکون فلش */}
                    <svg
                      className={`w-5 h-5 md:w-6 md:h-6 flex-shrink-0 mr-3 transition-transform duration-300 ${
                        isOpen
                          ? "rotate-180 text-[#FFB53F]"
                          : "text-gray-400"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {/* پاسخ */}
                  <div
                    className={`transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "max-h-40 opacity-100 pb-5 px-5 md:px-6"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-sm md:text-base text-gray-600 leading-7">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;