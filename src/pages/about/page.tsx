import { 
  FaBuilding, 
  FaAward, 
  FaUsers, 
  FaHandshake, 
  FaChartLine, 
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaCheckCircle,
  FaStar,
  FaQuoteLeft,
  FaEye
} from "react-icons/fa";

const AboutPage = () => {
  const stats = [
    { icon: FaBuilding, number: "+۵۰۰", label: "ملک فروخته شده", color: "bg-[#FFB53F]" },
    { icon: FaUsers, number: "+۱۲۰۰", label: "مشتری راضی", color: "bg-[#182338]" },
    { icon: FaAward, number: "۱۰", label: "سال تجربه", color: "bg-[#FFB53F]" },
    { icon: FaMapMarkerAlt, number: "+۵۰", label: "منطقه تحت پوشش", color: "bg-[#182338]" },
  ];

  const values = [
    {
      icon: FaHandshake,
      title: "صداقت و شفافیت",
      description: "ارائه اطلاعات دقیق و شفاف به مشتریان در تمامی مراحل معامله"
    },
    {
      icon: FaChartLine,
      title: "تخصص و تجربه",
      description: "بهره‌گیری از دانش روز بازار مسکن و تحلیل‌های تخصصی"
    },
    {
      icon: FaUsers,
      title: "مشتری‌مداری",
      description: "اولویت قرار دادن رضایت و منافع مشتریان در تمامی تصمیم‌گیری‌ها"
    },
    {
      icon: FaClock,
      title: "سرعت و دقت",
      description: "انجام سریع و دقیق امور با کمترین اتلاف وقت"
    }
  ];

  const team = [
    {
      name: "امیررضا محمدی",
      role: "مدیر عامل و موسس",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      bio: "بیش از ۱ سال سابقه در بازار املاک تهران و اصفهان"
    },
    {
      name: "سارا احمدی",
      role: "مدیر فروش",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      bio: "متخصص در زمینه املاک لوکس و سرمایه‌گذاری"
    },
    {
      name: "علی رضایی",
      role: "کارشناس حقوقی",
      image: "https://randomuser.me/api/portraits/men/85.jpg",
      bio: "مشاور حقوقی با ۸ سال تجربه در قراردادهای ملکی"
    }
  ];

  return (
    <div className="pt-22ddddddddddddd min-h-screen bg-white" dir="rtl">
      {/* Hero Section */}
      <section className="relative bg-[#182338] text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFB53F] rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FFB53F] rounded-full blur-[120px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              درباره <span className="text-[#FFB53F]">ما</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              با بیش از یک دهه تجربه در بازار املاک، همراه مطمئن شما در خرید، فروش و سرمایه‌گذاری هستیم
            </p>
            <div className="w-24 h-1 bg-[#FFB53F] mx-auto rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50 -mt-10 relative z-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2"
              >
                <div className={`w-16 h-16 ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4 text-white`}>
                  <stat.icon className="text-2xl" />
                </div>
                <div className="text-3xl font-bold text-[#182338] mb-2">{stat.number}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-[#182338] rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full opacity-5">
                <FaBuilding className="text-9xl absolute -right-10 -top-10" />
              </div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-[#FFB53F] rounded-xl flex items-center justify-center mb-6">
                  <FaChartLine className="text-2xl text-[#182338]" />
                </div>
                <h2 className="text-3xl font-bold mb-6">ماموریت ما</h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  ارائه خدمات حرفه‌ای و تخصصی در زمینه خرید، فروش و مشاوره املاک با تمرکز بر رضایت مشتری و ایجاد تجربه‌ای مطمئن و آسان.
                </p>
                <ul className="space-y-3">
                  {[
                    "مشاوره تخصصی رایگان",
                    "تحلیل دقیق بازار",
                    "پیگیری مستمر معاملات"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <FaCheckCircle className="text-[#FFB53F]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 rounded-3xl p-8 md:p-12 border-2 border-gray-100">
              <div className="w-14 h-14 bg-[#182338] rounded-xl flex items-center justify-center mb-6">
                <FaEye className="text-2xl text-[#FFB53F]" />
              </div>
              <h2 className="text-3xl font-bold text-[#182338] mb-6">چشم‌انداز ما</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                تبدیل شدن به برترین و معتبرترین مجموعه املاک در منطقه با ارائه خدمات نوین و بهره‌گیری از تکنولوژی‌های روز دنیا.
              </p>
              <ul className="space-y-3">
                {[
                  "استفاده از هوش مصنوعی در تحلیل بازار",
                  "گسترش خدمات در سراسر کشور",
                  "ایجاد پلتفرم آنلاین جامع"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-700">
                    <FaStar className="text-[#FFB53F]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#182338] mb-4">ارزش‌های ما</h2>
            <div className="w-20 h-1 bg-[#FFB53F] mx-auto rounded-full mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              اصول و ارزش‌هایی که راهنمای ما در ارائه خدمات به مشتریان هستند
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 text-center shadow-md hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#FFB53F] transition-colors duration-300">
                  <value.icon className="text-3xl text-[#182338] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-[#182338] mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#182338] mb-4">تیم ما</h2>
            <div className="w-20 h-1 bg-[#FFB53F] mx-auto rounded-full mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              متخصصان مجرب ما آماده ارائه بهترین خدمات به شما هستند
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#182338] to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#182338] mb-2">{member.name}</h3>
                  <p className="text-[#FFB53F] font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-[#182338] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <FaQuoteLeft className="text-9xl absolute top-10 right-10" />
        </div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <FaQuoteLeft className="text-5xl text-[#FFB53F] mb-8 mx-auto" />
          <blockquote className="text-2xl md:text-3xl leading-relaxed mb-8">
            "تعهد، تخصص و صداقت سه اصل اساسی است که ما را در طول این سال‌ها همراهی کرده و اعتماد مشتریان را جلب کرده است"
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-16 rounded-full bg-[#FFB53F] flex items-center justify-center">
              <FaBuilding className="text-2xl text-[#182338]" />
            </div>
            <div className="text-right">
              <div className="font-bold text-lg">امیررضا محمدی</div>
              <div className="text-gray-400 text-sm">مدیر عامل</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 text-center border-2 border-gray-100">
            <h2 className="text-3xl md:text-4xl font-bold text-[#182338] mb-6">
              آماده همکاری با شما هستیم
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              برای مشاوره رایگان و دریافت اطلاعات بیشتر درباره خدمات ما، با ما تماس بگیرید یا از طریق فرم زیر با ما در ارتباط باشید.
            </p>
            
            <div className="flex flex-col md:flex-row justify-center gap-6 mb-8">
              <a 
                href="tel:+989123456789"
                className="inline-flex items-center justify-center gap-3 bg-[#182338] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#182338]/90 transition-colors duration-300"
              >
                <FaPhoneAlt />
                تماس با ما
              </a>
              <a 
                href="mailto:info@amlak.com"
                className="inline-flex items-center justify-center gap-3 bg-[#FFB53F] text-[#182338] px-8 py-4 rounded-xl font-bold hover:bg-[#FFB53F]/90 transition-colors duration-300"
              >
                <FaEnvelope />
                ارسال ایمیل
              </a>
            </div>

            <div className="flex justify-center gap-8 text-gray-600">
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-[#FFB53F]" />
                <span>اصفهان، چهارباغ عباسی</span>
              </div>
              <div className="flex items-center gap-2">
                <FaClock className="text-[#FFB53F]" />
                <span>شنبه تا پنجشنبه ۹ صبح تا ۸ شب</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;