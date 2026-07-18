import { useState, useEffect } from "react";
import { IoCall } from "react-icons/io5";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

type NavLinkStyleProps = {
  isActive: boolean;
  isPending: boolean;
};

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkStyles = ({ isActive, isPending }: NavLinkStyleProps) => {
    if (isPending) return "text-gray-400 transition-all duration-300";
    return isActive
      ? "text-[#FFB53F] relative after:absolute after:-bottom-2 after:right-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-[#FFB53F] after:to-transparent after:rounded-full"
      : "text-white hover:text-[#FFB53F] transition-all duration-300";
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = "auto";
  };

  const navLinks = [
    { to: "/", label: "صفحه اصلی" },
    { to: "/about", label: "درباره ما" },
    { to: "/properties", label: "املاک" },
    { to: "/services", label: "خدمات" },
    { to: "/articles", label: "مقالات" },
    { to: "/contact", label: "ارتباط با ما" },
  ];

  return (
    <>
      <header
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#182338]/95 backdrop-blur-lg shadow-2xl py-5"
            : "bg-gradient-to-b from-[#182338] to-[#1a2744] py-5"
        }`}
      >
        <div className="px-4 md:px-8 max-w-7xl mx-auto">
          <div className="flex justify-between items-center">
            {/* Logo Section */}
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="relative">
                <div className="absolute inset-0 bg-[#FFB53F] rounded-xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                <img
                  src="/images/Frame.svg"
                  className="w-12 h-12 relative z-10 transition-transform duration-300 group-hover:scale-110"
                  alt="لوگو املاک"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg md:text-xl font-bold text-white group-hover:text-[#FFB53F] transition-colors duration-300">
                  امیررضا محمدی
                </span>
                <span className="text-[10px] md:text-xs text-gray-300">
                  مشاور و فروش املاک
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:block">
              <ul className="flex gap-1 xl:gap-2">
                {navLinks.map((link, index) => (
                  <li
                    key={link.to}
                    className="relative px-3 py-2 rounded-lg hover:bg-white/5 transition-all duration-300"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <NavLink to={link.to} className={navLinkStyles}>
                      <span className="text-sm font-medium">{link.label}</span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center gap-3">
              {/* Call Button - Desktop */}
              <a
                href="tel:+989123456789"
                className="hidden md:flex items-center gap-2 bg-gradient-to-r from-[#FFB53F] to-[#ffb53fcc] text-[#182338] px-5 py-2.5 rounded-xl font-bold text-sm hover:shadow-lg hover:shadow-[#FFB53F]/30 hover:scale-105 transition-all duration-300"
              >
                <IoCall className="text-lg" />
                <span>تماس مستقیم</span>
              </a>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => {
                  setIsMobileMenuOpen(!isMobileMenuOpen);
                  document.body.style.overflow = !isMobileMenuOpen ? "hidden" : "auto";
                }}
                className="lg:hidden text-white text-2xl p-2 rounded-lg hover:bg-white/10 transition-all duration-300 relative z-50"
                aria-label="منوی موبایل"
              >
                {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu - Full Screen Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          isMobileMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => {
            setIsMobileMenuOpen(false);
            document.body.style.overflow = "auto";
          }}
        ></div>

        {/* Menu Content */}
        <div
          className={`absolute top-0 right-0 w-full h-full bg-gradient-to-b from-[#182338] to-[#1a2744] transform transition-transform duration-500 ease-out ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-[#FFB53F]/10 to-transparent"></div>
          
          {/* Logo in Mobile Menu */}
          <div className="relative z-10 flex justify-center pt-12 pb-8">
            <div className="flex items-center gap-3">
              <img
                src="/images/Frame.svg"
                className="w-16 h-16"
                alt="لوگو املاک"
              />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">
                  امیررضا محمدی
                </span>
                <span className="text-xs text-gray-300">مشاور و فروش املاک</span>
              </div>
            </div>
          </div>

          {/* Menu Items */}
          <div className="relative z-10 px-6 py-8">
            <ul className="space-y-3">
              {navLinks.map((link, index) => (
                <li
                  key={link.to}
                  className="transform transition-all duration-500"
                  style={{
                    transitionDelay: isMobileMenuOpen ? `${index * 100}ms` : "0ms",
                    transform: isMobileMenuOpen ? "translateX(0)" : "translateX(50px)",
                    opacity: isMobileMenuOpen ? 1 : 0,
                  }}
                >
                  <NavLink
                    to={link.to}
                    onClick={handleLinkClick}
                    className={({ isActive }) =>
                      `flex items-center justify-between p-4 rounded-2xl transition-all duration-300 ${
                        isActive
                          ? "bg-gradient-to-r from-[#FFB53F] to-[#ffb53fcc] text-[#182338] font-bold shadow-lg shadow-[#FFB53F]/20"
                          : "bg-white/5 text-white hover:bg-white/10 hover:pr-6"
                      }`
                    }
                  >
                    <span className="text-lg">{link.label}</span>
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Call Button in Mobile Menu */}
            <div className="mt-8 pt-8 border-t border-white/10">
              <a
                href="tel:+989123456789"
                className="flex items-center justify-center gap-3 bg-gradient-to-r from-[#FFB53F] to-[#ffb53fcc] text-[#182338] px-6 py-4 rounded-2xl font-bold text-lg shadow-lg shadow-[#FFB53F]/30 hover:scale-105 transition-transform duration-300"
              >
                <IoCall className="text-2xl" />
                <span>تماس مستقیم</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-6 flex justify-center gap-4">
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#FFB53F] hover:text-[#182338] transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#FFB53F] hover:text-[#182338] transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;