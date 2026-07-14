import { 
    FaFileAlt, 
    FaBalanceScale, 
    FaMoneyBillWave, 
    FaBuilding, 
    FaHome, 
    FaSearch 
  } from "react-icons/fa";
  
  const VIPServices = () => {
    const services = [
      {
        id: 1,
        icon: <FaSearch className="text-4xl md:text-5xl text-[#182338]" />,
        title: "رهن و اجاره",
        description: "مشاوره و انجام امور مربوط به رهن و اجاره ملک",
      },
      {
        id: 2,
        icon: <FaHome className="text-4xl md:text-5xl text-[#182338]" />,
        title: "خرید و فروش",
        description: "خرید و فروش انواع املاک",
      },
      {
        id: 3,
        icon: <FaBuilding className="text-4xl md:text-5xl text-[#182338]" />,
        title: "سرمایه گذاری ملکی",
        description: "مشاوره برای سرمایه گذاری سودآور در املاک",
      },
      {
        id: 4,
        icon: <FaMoneyBillWave className="text-4xl md:text-5xl text-[#182338]" />,
        title: "دریافت وام",
        description: "راهنمایی دریافت وام با بهترین شرایط",
      },
      {
        id: 5,
        icon: <FaBalanceScale className="text-4xl md:text-5xl text-[#182338]" />,
        title: "بررسی حقوقی",
        description: "بررسی قراردادها و اطمینان از سلامت معامله",
      },
      {
        id: 6,
        icon: <FaFileAlt className="text-4xl md:text-5xl text-[#182338]" />,
        title: "انتقال سند",
        description: "پیگیری مراحل اداری تا انتقال سند",
      },
    ];
  
    return (
      <section className="py-16 bg-white" dir="rtl">
        <div className="max-w-7xl mx-auto px-4">
          {/* Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              خدمات ما پکیج
            </h2>
            <div className="w-16 h-1 bg-[#FFB53F] mx-auto rounded-full"></div>
          </div>
  
          {/* Services Container */}
          <div className="bg-white border-[8px] border-gray-200 rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {services.map((service, index) => {
                // تعیین اینکه آیا خط جداکننده نشان داده شود
                const showBorder = 
                  // در موبایل (2 ستون): بین آیتم‌های 1-2، 3-4، 5-6
                  (index % 2 === 0 && index < services.length - 1) ||
                  // در تبلت (3 ستون): بین آیتم‌های 1-2، 2-3، 4-5، 5-6
                  (index % 3 !== 2 && index < services.length - 1) ||
                  // در دسکتاپ (6 ستون): بین همه به جز آخرین
                  (index < services.length - 1);
  
                return (
                  <div
                    key={service.id}
                    className={`
                      flex flex-col items-center justify-center text-center pl-5
                      ${showBorder ? 'border-l border-gray-300' : ''}
                      pb-8 md:pb-0
                      ${index >= services.length - 2 ? 'border-b-0' : 'border-b border-gray-300 md:border-b-0'}
                    `}
                  >
                    {/* Icon */}
                    <div className="mb-4">
                      {service.icon}
                    </div>
  
                    {/* Title */}
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {service.title}
                    </h3>
  
                    {/* Description */}
                    <p className="text-xs text-gray-600 leading-6 px-2">
                      {service.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default VIPServices;