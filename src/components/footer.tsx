import { FaPhone } from "react-icons/fa";
import { HiGlobeAlt } from "react-icons/hi2";
import { FaTelegramPlane } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="w-full h-20 lg:h-50"></div>

      <div className="relative w-full text-white ">
        <img
          src="./images/Rectangle.svg"
          alt="background"
          className="absolute inset-0 w-full h-full object-cover object-top z-0 "
        />
        <div className="relative z-10 flex justify-between pt-30 pb-10 ">
          <section className="flex flex-col lg:flex-row w-[90%] mx-auto gap-12 lg:gap-0">
            <div className="border-b-4 lg:border-b-0 lg:border-l-4 border-gray-400 pb-8 lg:pb-0 flex flex-2 flex-col gap-6 items-center">
              <img
                className="w-15"
                src="https://electroshahresfahan.com/images/Rectangle.svg"
                alt=""
              />
              <p className="text-center text-gray-400">
                شرکت طراحی و توسعه وب جامبرس، همراه مطمئن شما برای ساخت سایت‌های
                حرفه‌ای، بهینه‌سازی سئو و راه‌کارهای دیجیتال اختصاصی است.
              </p>
              <div className="flex  gap-4">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#FFB53F] px-4 py-2 text-black rounded-[10px] transition-all duration-300 ease-in-out hover:bg-black hover:text-[#FFB53F] hover:scale-110 cursor-pointer"
                >
                  <FaTelegramPlane />
                </a>

                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#FFB53F] px-4 py-2 text-black rounded-[10px] transition-all duration-300 ease-in-out hover:bg-black hover:text-[#FFB53F] hover:scale-110 cursor-pointer"
                >
                  <FaWhatsapp />
                </a>

                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#FFB53F] px-4 py-2 text-black rounded-[10px] transition-all duration-300 ease-in-out hover:bg-black hover:text-[#FFB53F] hover:scale-110 cursor-pointer"
                >
                  <IoLogoInstagram />
                </a>

                <a
                  href="tel:09123456789"
                  className="bg-[#FFB53F] px-4 py-2 text-black rounded-[10px] transition-all duration-300 ease-in-out hover:bg-black hover:text-[#FFB53F] hover:scale-110 cursor-pointer"
                >
                  <FaPhone />
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center gap-3 border-b-4 lg:border-b-0 lg:border-l-4 pb-8 lg:pb-0 flex-1 border-gray-400">
              <span className="border-b-4 pb-2 border-[#FFB53F] text-white mb-2  ">
                دسترسی سریع
              </span>
              <ul className="flex flex-col items-center gap-2">
                <li>
                  <Link
                    className="text-gray-400 hover:text-[#FFB53F] transition-all duration-300"
                    to="/"
                  >
                    صفحه اصلی
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-400 hover:text-[#FFB53F] transition-all duration-300"
                    to="/about"
                  >
                    درباره ما
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-400 hover:text-[#FFB53F] transition-all duration-300"
                    to="/properties"
                  >
                    املاک
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-400 hover:text-[#FFB53F] transition-all duration-300"
                    to="/services"
                  >
                    خدمات
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-400 hover:text-[#FFB53F] transition-all duration-300"
                    to="/blog"
                  >
                    مقالات
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-400 hover:text-[#FFB53F] transition-all duration-300"
                    to="/contact"
                  >
                    ارتباط با ما
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex-2 flex flex-col gap-5 items-center">
              <span className="border-b-4 pb-2 border-[#FFB53F] text-white mb-2 ">
                ارتباط با ما
              </span>
              <span className="text-gray-400">
                اصفهان /چهارباغ عباسی/ بازارملت/طبقه دوم
              </span>
              <span className="text-gray-400">09123456789</span>
              <span className="text-gray-400">آقای امیررضا محمدی</span>
              <div className="flex gap-20 mt-2">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all duration-300 hover:scale-110 hover:opacity-80"
                >
                  <IoLogoInstagram className="text-[#FFB53F] text-3xl" />
                </a>

                <a
                  href="tel:09123456789"
                  className="transition-all duration-300 hover:scale-110 hover:opacity-80"
                >
                  <FaPhone className="text-[#FFB53F] text-3xl" />
                </a>

                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all duration-300 hover:scale-110 hover:opacity-80"
                >
                  <HiGlobeAlt className="text-[#FFB53F] text-3xl" />
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Footer;
