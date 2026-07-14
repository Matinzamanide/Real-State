import { IoCall } from "react-icons/io5";
import { NavLink } from "react-router-dom";

type NavLinkStyleProps = {
  isActive: boolean;
  isPending: boolean;
};

function Navbar() {
  // استفاده از تایپ تعریف‌شده برای رفع ارور تایپ‌اسکریپت
  const navLinkStyles = ({ isActive, isPending }: NavLinkStyleProps) => {
    if (isPending) return "text-gray-400 transition-all duration-300";
    
    return isActive
      ? "text-[#FFB53F] border-b-2 border-[#FFB53F] pb-1 transition-all duration-300"
      : "hover:text-[#FFB53F] transition-all duration-300";
  };

  return (
    <header className="border-b border-white/10 shadow-2xl z-50 bg-[#182338] fixed w-full px-4 md:px-8 py-4 flex justify-between items-center">
      <div className="flex items-center gap-2 md:gap-4">
        <span>
          {/* اصلاح آدرس تصویر: حذف کلمه public از مسیر */}
          <img
            src="/images/Frame.svg"
            className="w-10 md:w-12"
            alt="لوگو املاک" // اضافه کردن alt برای سئو و دسترسی‌پذیری
          />
        </span>
        <div className="flex flex-col">
          <span className="text-base md:text-xl font-extrabold text-white">
            امیررضا محمدی
          </span>
          <span className="text-[10px] md:text-xs text-gray-300">
            مشاور و فروش املاک
          </span>
        </div>
      </div>

      {/* منو در موبایل مخفی می‌شود */}
      <nav className="hidden lg:block">
        <ul className="flex gap-8 xl:gap-16 text-white">
          <li>
            <NavLink to="/" className={navLinkStyles}>
              صفحه اصلی
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={navLinkStyles}>
              درباره ما
            </NavLink>
          </li>
          <li>
            <NavLink to="/properties" className={navLinkStyles}>
              املاک
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" className={navLinkStyles}>
              خدمات
            </NavLink>
          </li>
          <li>
            <NavLink to="/articles" className={navLinkStyles}>
              مقالات
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={navLinkStyles}>
              ارتباط با ما
            </NavLink>
          </li>
        </ul>
      </nav>

      <a
        href="tel:+989123456789"
        className="flex gap-1.5 items-center border border-gray-400 text-white rounded-lg p-2 text-xs md:text-base hover:bg-gray-700 hover:text-white transition-colors"
      >
        <span className="hidden sm:block">تماس مستقیم</span>
        <span className="block sm:hidden">تماس</span>
        <span>
          <IoCall className="text-[#FFB53F]" /> {/* رنگ آیکون برای زیبایی بیشتر */}
        </span>
      </a>
    </header>
  );
}

export default Navbar;