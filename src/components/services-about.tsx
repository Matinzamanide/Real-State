const ServicesAbout = () => {
  const stats = [
    {
      value: "مشاوره رایگان",
      label: "بازار اولیه",
      highlighted: true,
    },
    {
      value: "100%",
      label: "رضایت مشتریان",
    },
    {
      value: "300+",
      label: "معامله موفق",
    },
    {
      value: "5+",
      label: "سال تجربه",
    },
  ];

  return (
    <section className="py-16 bg-white" dir="rtl">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            درباره خدمات
          </h2>
          <div className="w-16 h-1 bg-[#FFB53F] mx-auto rounded-full"></div>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image - Left */}
          <div className="lg:w-1/2 flex justify-center order-2 lg:order-2">
            <img
              src="./images/home1.jpg"
              alt="خانه مدرن"
              className="w-full max-w-lg rounded-2xl shadow-xl "
            />
          </div>

          {/* Text Content - Right */}
          <div className="lg:w-1/2 text-right order-1 lg:order-1">
            <h3 className="text-3xl md:text-4xl font-bold text-[#182338] mb-6">
              تخصص و خدمات <span className="text-[#182338]">VIP</span>
            </h3>

            <p className="text-gray-600 leading-8 mb-10 text-sm md:text-base">
              فرآیند خرید یا فروش ملک نیازمند تجربه، شناخت بازار و دقت در جزئیات
              است. ما با تکیه بر سال‌ها تجربه و دانش تخصصی، به شما کمک می‌کنیم
              تا بهترین تصمیم را با اطمینان کامل اتخاذ کنید.
            </p>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl p-4 text-center hover:shadow-md transition-shadow duration-300 flex flex-col items-center justify-center"
                >
                  <div className="text-xl md:text-2xl font-bold text-[#182338] mb-2">
                    {stat.value}
                  </div>
                  {stat.highlighted ? (
                    <div className="bg-[#182338] text-white text-xs px-3 py-1 rounded inline-block">
                      {stat.label}
                    </div>
                  ) : (
                    <div className="text-xs text-gray-500">{stat.label}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesAbout;
