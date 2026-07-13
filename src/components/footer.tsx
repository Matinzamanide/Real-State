import { FaPhone, FaInstagram, FaGlobe, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <div dir="rtl" className="font-sans">
      {/* Contact Card Section */}
     

      {/* Footer Section */}
      <footer className="bg-[#182338] text-white py-12 md:py-16 px-4 relative">
        {/* Curved Top */}
        <div className="absolute top-0 left-0 right-0 -translate-y-full">
          <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path
              d="M0 50L48 45C96 40 192 30 288 35C384 40 480 60 576 65C672 70 768 60 864 50C960 40 1056 30 1152 35C1248 40 1344 60 1392 70L1440 80V100H0V50Z"
              fill="#182338"
            />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Column 1: Logo & Description */}
            <div className="text-center md:text-right">
              {/* Logo */}
              <div className="flex justify-center md:justify-start mb-4">
                <div className="w-14 h-14 bg-[#FFB53F] rounded-lg flex items-center justify-center">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#182338"
                    strokeWidth="2"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                    <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z" />
                    <path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                  </svg>
                </div>
              </div>

              <p className="text-gray-300 text-sm leading-7 mb-6">
                شرکت طراحی و توسعه وب جام‌برس،
                <br />
                همراه مطمئن شما برای ساخت سایت‌های حرفه‌ای.
                <br />
                پشتیبانی سئو و رتبه‌بندی دیجیتال اختصاصی است.
              </p>

              {/* Social Icons */}
              <div className="flex justify-center md:justify-start gap-3">
                <a
                  href="#"
                  className="w-10 h-10 bg-[#FFB53F] rounded-lg flex items-center justify-center hover:bg-opacity-80 transition"
                >
                  <FaGlobe className="text-[#182338]" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-[#FFB53F] rounded-lg flex items-center justify-center hover:bg-opacity-80 transition"
                >
                  <FaInstagram className="text-[#182338]" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-[#FFB53F] rounded-lg flex items-center justify-center hover:bg-opacity-80 transition"
                >
                  <FaPhone className="text-[#182338]" />
                </a>
              </div>
            </div>

            {/* Column 2: Quick Access */}
            <div className="text-center">
              <h3 className="text-xl font-bold mb-6 text-white">دسترسی سریع</h3>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li>
                  <a href="#" className="hover:text-[#FFB53F] transition">
                    صفحه اصلی
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#FFB53F] transition">
                    درباره ما
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#FFB53F] transition">
                    املاک
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#FFB53F] transition">
                    خدمات
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#FFB53F] transition">
                    مقالات
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#FFB53F] transition">
                    ارتباط با ما
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Contact Info */}
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold mb-6 text-white">ارتباط با ما</h3>
              <p className="text-gray-300 text-sm leading-7 mb-4">
                اصفهان، چهارباغ عباسی، بازار ملت، طبقه دوم
              </p>
              <p
                className="text-gray-300 text-sm mb-2"
                dir="ltr"
              >
                09136425871
              </p>
              <p className="text-gray-400 text-xs mb-6">
                آقای امیررضا محمدی
              </p>

              {/* Social Icons */}
              <div className="flex justify-center md:justify-start gap-3">
                <a
                  href="#"
                  className="w-10 h-10 bg-[#FFB53F] rounded-lg flex items-center justify-center hover:bg-opacity-80 transition"
                >
                  <FaGlobe className="text-[#182338]" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-[#FFB53F] rounded-lg flex items-center justify-center hover:bg-opacity-80 transition"
                >
                  <FaInstagram className="text-[#182338]" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-[#FFB53F] rounded-lg flex items-center justify-center hover:bg-opacity-80 transition"
                >
                  <FaPhone className="text-[#182338]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
