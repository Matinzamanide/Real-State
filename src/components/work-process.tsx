const WorkProcess = () => {
    const steps = [
      {
        number: 1,
        title: "ثبت درخواست",
        description: "با ما از طریق راه‌های ارتباطی در تماس باشید",
      },
      {
        number: 2,
        title: "تماس اولیه",
        description: "بررسی اولیه نیازها و تعیین زمان جلسه مشاوره",
      },
      {
        number: 3,
        title: "جلسه مشاوره",
        description: "تحلیل بازار و ارائه بهترین راهکارها به شما",
      },
      {
        number: 4,
        title: "بازدید ملک",
        description: "بازدید از املاک منتخب و ارزیابی دقیق و درست",
      },
      {
        number: 5,
        title: "کمک در بهترین انتخاب",
        description: "ما بهترین گزینه‌ها را به شما پیشنهاد می‌دهیم",
      },
      {
        number: 6,
        title: "ثبت نهایی",
        description: "ارائه نهایی و انتقال سند",
      },
    ];
  
    return (
      <section className="py-16 z-0 bg-white" dir="rtl">
        <div className="max-w-7xl mx-auto px-4">
          {/* Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              مراحل همکاری با ما
            </h2>
            <div className="w-16 h-1 bg-[#FFB53F] mx-auto rounded-full"></div>
          </div>
  
          {/* Steps Container */}
          <div className="relative">
            {/* Connection Line - Desktop */}
            <div className="hidden lg:block absolute top-16 right-0 left-0 h-0.5 bg-[#FFB53F] opacity-30"></div>
  
            {/* Steps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8 lg:gap-4">
              {steps.map((step, index) => (
                <div key={step.number} className="relative flex flex-col items-center">
                  {/* Arrow for desktop (except last item) */}
                  {index < steps.length - 1 && (
                    <div className="hidden xl:block absolute -left-8 top-16 text-[#FFB53F] text-2xl z-10">
                      ←
                    </div>
                  )}
  
                  {/* Step Box */}
                  <div className="relative z-0 w-32 h-32 bg-[#182338] rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <span className="text-5xl font-bold text-[#FFB53F]">
                      {step.number}
                    </span>
                  </div>
  
                  {/* Step Info */}
                  <div className="mt-6 text-center px-2">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-6">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default WorkProcess;