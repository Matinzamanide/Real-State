import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { 
  FaCalendarAlt, FaClock, FaUser, FaChevronDown, FaShareAlt, 
  FaChartLine, FaBookmark, FaHeart, FaUserTie, FaPhoneAlt, FaCheckCircle 
} from "react-icons/fa";

// --- تعریف تایپ‌ها ---
export interface ArticleSection {
  id: string; // برای اسکرول نرم به این بخش
  heading: string;
  text: string;
  image?: string;
}

export interface ArticleFAQ {
  question: string;
  answer: string;
}

export interface ArticleData {
  id: number;
  title: string;
  category: string;
  author: string;
  authorRole: string;
  authorBio: string;
  authorAvatar: string;
  date: string;
  readTime: string;
  coverImage: string;
  keyTakeaways: string[]; // نکات کلیدی
  sections: ArticleSection[];
  tags: string[];
  faqs: ArticleFAQ[];
}

// --- دیتای نمونه گسترش‌یافته ---
const sampleArticleData: ArticleData = {
  id: 1,
  title: "بهترین زمان خرید ملک در ۱۴۰۵ چه زمانی است؟",
  category: "تحلیل بازار",
  author: "امیررضا محمدی",
  authorRole: "مشاور ارشد و سرمایه‌گذار املاک",
  authorBio: "با بیش از ۱۰ سال سابقه در بازار مسکن اصفهان و تهران، تخصص من کمک به شما برای یافتن بهترین فرصت‌های سرمایه‌گذاری با کمترین ریسک است.",
  authorAvatar: "https://randomuser.me/api/portraits/men/32.jpg",
  date: "۵ فروردین ۱۴۰۵",
  readTime: "۵ دقیقه مطالعه",
  coverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2X4xn-mS7m-rxQpQQ6uCJ0UmIAvJoUgPigY-FbYGJKLgMz9_Gsxi4TZg&s=10",
  keyTakeaways: [
    "بازار مسکن در بهار ۱۴۰۵ با افزایش تقاضای فصلی مواجه خواهد شد.",
    "خرید در زمان رکود تورمی، بهترین استراتژی برای حفظ ارزش پول است.",
    "استعلام ثبتی و بررسی بدهی‌های ملک، قبل از پرداخت هرگونه وجه الزامی است."
  ],
  sections: [
    {
      id: "section-1",
      heading: "۱. وضعیت فعلی بازار مسکن در ابتدای سال",
      text: "بازار مسکن همواره تحت تأثیر نوسانات اقتصادی، نرخ ارز و سیاست‌های دولتی قرار دارد. در ابتدای سال ۱۴۰۵، شاهد ثبات نسبی در قیمت‌ها هستیم، اما کارشناسان پیش‌بینی می‌کنند که با افزایش تقاضا در فصل بهار، روند قیمت‌ها صعودی خواهد شد. بنابراین، شناسایی نقاط کف بازار برای سرمایه‌گذاری حیاتی است.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWa2bqchbrBhNyRHdNb3si3AZp5vK-fafkYSSpS2MP7w&s=10",
    },
    {
      id: "section-2",
      heading: "۲. تاثیر نرخ تورم و دلار بر قیمت املاک",
      text: "یکی از مهم‌ترین فاکتورها در تعیین قیمت ملک، همبستگی آن با نرخ ارز است. تجربه سال‌های گذشته نشان داده است که هرگونه جهش در قیمت دلار، با یک تاخیر زمانی ۱ تا ۳ ماهه، خود را در قیمت مسکن نشان می‌دهد. خرید در زمان‌هایی که بازار در رکود تورمی به سر می‌برد، می‌تواند بهترین استراتژی باشد.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ_t_VTODYTk23TKrLzvY1WELJzaODaUG7M1FB_gDtNQ&s=10",
    },
    {
      id: "section-3",
      heading: "۳. نکات طلایی که قبل از خرید باید بدانید",
      text: "قبل از امضای قرارداد، حتماً استعلام ثبتی ملک را بررسی کنید. وضعیت سند (تک‌برگ یا منگوله‌دار)، بدهی‌های احتمالی به شهرداری و دارایی، و همچنین بررسی دقیق مبایعه‌نامه توسط یک وکیل یا مشاور املاک معتمد، از الزامات غیرقابل چشم‌پوشی است.",
      image: "https://media.khabarvarzeshi.com/d/2021/10/27/4/174286.jpg",
    }
  ],
  tags: ["خرید_ملک", "سرمایه_گذاری", "بازار_مسکن", "مشاوره_املاک"],
  faqs: [
    {
      question: "آیا الان زمان خوبی برای خرید ملک سرمایه‌گذاری است؟",
      answer: "بله، با توجه به روند تاریخی بازار مسکن در ایران، ملک همواره یک سرمایه‌گذاری امن و بلندمدت بوده است. خرید در زمان رکود، بهترین فرصت برای چانه‌زنی و دریافت قیمت مناسب است."
    },
    {
      question: "برای دریافت وام مسکن چه مدارکی نیاز است؟",
      answer: "مدارک اصلی شامل شناسنامه، کارت ملی، سند ملک مورد نظر، گواهی عدم سوءپیشینه و فیش حقوقی یا جواز کسب برای اثبات توانایی بازپرداخت اقساط می‌باشد."
    }
  ]
};

const ArticlePage = () => {
  const { id } = useParams();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  
  const article = sampleArticleData;

  // اسکرول به بالا هنگام تغییر صفحه
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  // محاسبه نوار پیشرفت مطالعه
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(Number(scroll) * 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // اسکرول نرم به بخش مورد نظر
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      {/* 1. نوار پیشرفت مطالعه (Reading Progress Bar) */}
      <div className="fixed top-0 left-0 w-full h-1.5 bg-gray-200 z-50">
        <div 
          className="h-full bg-[#FFB53F] transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-20 md:py-28">
        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* --- سایدبار فهرست مطالب (فقط در دسکتاپ) --- */}
          <aside className="hidden lg:block w-1/4">
            <div className="sticky top-28 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h4 className="font-bold text-[#182338] mb-4 text-lg border-b border-gray-100 pb-2">فهرست مطالب</h4>
              <ul className="space-y-3">
                {article.sections.map((section) => (
                  <li key={section.id}>
                    <button 
                      onClick={() => scrollToSection(section.id)}
                      className="text-sm text-gray-600 hover:text-[#FFB53F] hover:pr-2 transition-all duration-300 text-right w-full"
                    >
                      {section.heading}
                    </button>
                  </li>
                ))}
                <li>
                  <button 
                    onClick={() => scrollToSection('faqs-section')}
                    className="text-sm text-gray-600 hover:text-[#FFB53F] hover:pr-2 transition-all duration-300 text-right w-full font-medium"
                  >
                    سوالات پرتکرار
                  </button>
                </li>
              </ul>
            </div>
          </aside>

          {/* --- محتوای اصلی مقاله --- */}
          <main className="w-full lg:w-3/4">
            <article className="bg-white rounded-3xl shadow-xl shadow-[#182338]/5 overflow-hidden border border-gray-100">
              
              {/* هدر مقاله */}
              <header className="p-6 md:p-10 pb-0">
                <div className="flex justify-between items-start mb-4">
                  <span className="inline-flex items-center gap-2 bg-[#FFB53F]/10 text-[#182338] text-sm font-bold px-4 py-1.5 rounded-full border border-[#FFB53F]/30">
                    <FaChartLine className="text-[#FFB53F]" />
                    {article.category}
                  </span>
                  {/* دکمه‌های تعاملی */}
                  <div className="flex gap-3">
                    <button 
                      onClick={() => setIsLiked(!isLiked)}
                      className={`p-2 rounded-full transition-colors ${isLiked ? 'bg-red-50 text-red-500' : 'bg-gray-100 text-gray-500 hover:bg-red-50 hover:text-red-500'}`}
                    >
                      <FaHeart className={isLiked ? "fill-current" : ""} />
                    </button>
                    <button 
                      onClick={() => setIsSaved(!isSaved)}
                      className={`p-2 rounded-full transition-colors ${isSaved ? 'bg-[#FFB53F]/20 text-[#FFB53F]' : 'bg-gray-100 text-gray-500 hover:bg-[#FFB53F]/20 hover:text-[#FFB53F]'}`}
                    >
                      <FaBookmark className={isSaved ? "fill-current" : ""} />
                    </button>
                  </div>
                </div>
                
                <h1 className="text-2xl md:text-4xl lg:text-3xl font-extrabold text-[#182338] leading-tight mb-6">
                  {article.title}
                </h1>

                <div className="flex flex-wrap items-center gap-6 text-gray-500 text-sm md:text-base border-b border-gray-100 pb-6 mb-8">
                  <div className="flex items-center gap-2">
                    <FaUser className="text-[#FFB53F]" />
                    <span className="font-medium text-[#182338]">{article.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCalendarAlt className="text-[#FFB53F]" />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaClock className="text-[#FFB53F]" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <div className="relative rounded-2xl overflow-hidden shadow-lg mb-10 group">
                  <img 
                    src={article.coverImage} 
                    alt={article.title} 
                    className="w-full h-[300px] md:h-[450px] object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#182338]/60 via-transparent to-transparent"></div>
                </div>
              </header>

              {/* بدنه محتوا */}
              <div className="px-6 md:px-10 pb-10">
                
                {/* باکس نکات کلیدی */}
                <div className="bg-[#182338]/5 border-r-4 border-[#FFB53F] p-6 rounded-l-xl mb-10">
                  <h3 className="font-bold text-[#182338] text-lg mb-3 flex items-center gap-2">
                    <FaCheckCircle className="text-[#FFB53F]" />
                    نکات کلیدی این مقاله:
                  </h3>
                  <ul className="space-y-2">
                    {article.keyTakeaways.map((point, idx) => (
                      <li key={idx} className="text-gray-700 text-base flex items-start gap-2">
                        <span className="text-[#FFB53F] mt-1.5">•</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="text-gray-700 leading-9 text-justify">
                  {article.sections.map((section, index) => (
                    <div key={section.id} id={section.id} className="mb-12 scroll-mt-32">
                      <h2 className="text-2xl md:text-3xl font-bold text-[#182338] mb-6 flex items-center gap-3">
                        <span className="w-1.5 h-8 bg-[#FFB53F] rounded-full"></span>
                        {section.heading}
                      </h2>
                      
                      {section.image && (
                        <figure className="mb-6 rounded-xl overflow-hidden shadow-md border border-gray-100">
                          <img 
                            src={section.image} 
                            alt={section.heading} 
                            className="w-full h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-500" 
                          />
                        </figure>
                      )}

                      <p className="text-lg leading-9 mb-4 text-gray-600">
                        {section.text}
                      </p>
                    </div>
                  ))}
                </div>

                {/* برچسب‌ها و اشتراک‌گذاری */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 border-t border-b border-gray-100 py-6 my-10">
                  <div className="flex gap-2 flex-wrap justify-center md:justify-start">
                    {article.tags.map((tag) => (
                      <span key={tag} className="bg-gray-100 text-[#182338] px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-[#182338] hover:text-[#FFB53F] transition-colors duration-300 cursor-pointer">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <button className="flex items-center gap-2 text-[#182338] font-bold hover:text-[#FFB53F] px-4 py-2 rounded-lg transition-colors duration-300">
                    <FaShareAlt className="text-lg" />
                    اشتراک‌گذاری مقاله
                  </button>
                </div>

                {/* باکس معرفی نویسنده */}
                <div className="bg-gray-50 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center md:items-start gap-6 mb-12 border border-gray-100">
                  <img src={article.authorAvatar} alt={article.author} className="w-20 h-20 rounded-full border-4 border-white shadow-md object-cover" />
                  <div className="text-center md:text-right flex-1">
                    <h4 className="text-xl font-bold text-[#182338] mb-1">{article.author}</h4>
                    <p className="text-[#FFB53F] font-medium text-sm mb-3">{article.authorRole}</p>
                    <p className="text-gray-600 leading-7 text-sm">{article.authorBio}</p>
                  </div>
                </div>

                {/* سوالات متداول */}
                <div id="faqs-section" className="mt-12 scroll-mt-32">
                  <h3 className="text-2xl font-bold text-[#182338] mb-6 flex items-center gap-2">
                    <span className="text-[#FFB53F] text-3xl">?</span>
                    سوالات پرتکرار خریداران
                  </h3>
                  
                  <div className="space-y-4">
                    {article.faqs.map((faq, index) => {
                      const isOpen = openFaq === index;
                      return (
                        <div 
                          key={index} 
                          className={`border rounded-xl overflow-hidden transition-all duration-300 ${
                            isOpen ? "border-[#FFB53F] shadow-md shadow-[#FFB53F]/10" : "border-gray-200 hover:border-gray-300"
                          }`}
                        >
                          <button
                            onClick={() => setOpenFaq(isOpen ? null : index)}
                            className="w-full flex justify-between items-center p-5 text-right bg-white hover:bg-gray-50 transition-colors"
                          >
                            <span className={`font-bold text-lg transition-colors ${isOpen ? "text-[#182338]" : "text-gray-700"}`}>
                              {faq.question}
                            </span>
                            <FaChevronDown 
                              className={`text-[#FFB53F] transition-transform duration-300 text-lg ${isOpen ? "rotate-180" : ""}`} 
                            />
                          </button>
                          
                          <div 
                            className={`overflow-hidden transition-all duration-300 ease-in-out ${
                              isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                            }`}
                          >
                            <div className="p-5 pt-0 text-gray-600 leading-8 text-justify border-t border-gray-100 bg-[#FFB53F]/5">
                              {faq.answer}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

              </div>
            </article>

            {/* --- بنر دعوت به اقدام (CTA) املاک --- */}
            <div className="mt-10 bg-[#182338] rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFB53F] rounded-full blur-[100px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FFB53F] rounded-full blur-[100px] opacity-20 translate-y-1/2 -translate-x-1/2"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">هنوز در مورد خرید ملک مطمئن نیستید؟</h3>
                <p className="text-gray-300 mb-8 max-w-2xl mx-auto leading-7">
                  تیم تخصصی ما آماده است تا به صورت رایگان شما را در انتخاب بهترین گزینه سرمایه‌گذاری راهنمایی کند. همین حالا تماس بگیرید.
                </p>
                <a 
                  href="tel:+989123456789" 
                  className="inline-flex items-center gap-3 bg-[#FFB53F] text-[#182338] px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg shadow-[#FFB53F]/30"
                >
                  <FaPhoneAlt />
                  دریافت مشاوره رایگان
                </a>
              </div>
            </div>

          </main>
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;