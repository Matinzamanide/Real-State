import { useState } from "react";
import { 
  FaBell, 
  FaComments, 
  FaCalendarAlt, 
  FaSearch, 
  FaTimes,
  FaChevronLeft,
  FaHome,
  FaBuilding,
  FaUsers,
  FaUserTie,
  FaEye,
  FaFileContract,
  FaMoneyBillWave,
  FaClipboardList,
  FaHeart,
  FaStickyNote,
  FaChartBar,
  FaMapMarkedAlt,
  FaImage,
  FaRegBell,
  FaCog
} from "react-icons/fa";

const DashboardLayout = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const menuItems = [
    { icon: FaHome, label: "داشبورد", active: true },
    { icon: FaBuilding, label: "املاک" },
    { icon: FaUsers, label: "مشتریان" },
    { icon: FaUserTie, label: "مالکین" },
    { icon: FaEye, label: "بازدید ها" },
    { icon: FaFileContract, label: "قرارداد ها" },
    { icon: FaMoneyBillWave, label: "مالی" },
    { icon: FaClipboardList, label: "پیگیری ها" },
    { icon: FaHeart, label: "علاقه مندی" },
    { icon: FaStickyNote, label: "یادداشت" },
    { icon: FaChartBar, label: "گزارشات" },
    { icon: FaMapMarkedAlt, label: "نقشه" },
    { icon: FaImage, label: "رسانه" },
    { icon: FaRegBell, label: "اعلانات" },
    { icon: FaCog, label: "تنظیمات" },
  ];

  return (
    <div className=" pt-22 min-h-screen bg-gray-50 flex" dir="rtl">
      {/* Sidebar */}
      <aside className="w-64 bg-[#182338] text-white fixed right-0 top-0 h-full overflow-y-auto z-40">
        <div className="p-6">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-[#FFB53F] flex items-center justify-center">
              <FaHome className="text-[#182338] text-xl" />
            </div>
            <h1 className="text-lg font-bold">پنل مدیریت املاک</h1>
          </div>

          {/* Menu Items */}
          <nav className="space-y-2">
            {menuItems.map((item, index) => (
              <button
                key={index}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-300 group ${
                  item.active 
                    ? "bg-[#FFB53F] text-[#182338] font-bold" 
                    : "text-gray-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                <span className="flex items-center gap-3">
                  <item.icon className="text-lg" />
                  <span>{item.label}</span>
                </span>
                <FaChevronLeft className="text-sm opacity-50 group-hover:opacity-100 transition-opacity" />
              </button>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 mr-64">
        {/* Header */}
        <header className="bg-[#182338] text-white sticky top-0 z-30 shadow-lg">
          <div className="px-6 py-4">
            <div className="flex items-center justify-between gap-4">
              {/* Right Section - User Profile */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-3 pl-6 border-l border-gray-600">
                  <div className="w-12 h-12 rounded-full bg-gray-600 flex items-center justify-center">
                    <svg className="w-7 h-7 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-sm">امیر رضا محمدی</p>
                    <p className="text-xs text-gray-400">مدیر سیستم</p>
                  </div>
                </div>

                {/* Action Icons */}
                <div className="flex items-center gap-3">
                  <button className="p-2 rounded-lg hover:bg-white/10 transition-colors relative">
                    <FaBell className="text-lg" />
                    <span className="absolute top-1 right-1 w-2 h-2 bg-[#FFB53F] rounded-full"></span>
                  </button>
                  <button className="p-2 rounded-lg hover:bg-white/10 transition-colors">
                    <FaComments className="text-lg" />
                  </button>
                  <button className="p-2 rounded-lg hover:bg-white/10 transition-colors">
                    <FaCalendarAlt className="text-lg" />
                  </button>
                </div>
              </div>

              {/* Center Section - Search Bar */}
              <div className="flex-1 max-w-xl mx-4">
                <div className="relative">
                  <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors">
                    <FaChevronLeft className="text-sm" />
                  </button>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="input text"
                    className="w-full bg-white text-gray-900 rounded-lg py-2.5 pr-10 pl-10 focus:outline-none focus:ring-2 focus:ring-[#FFB53F] transition-all"
                  />
                  {searchQuery && (
                    <button 
                      onClick={() => setSearchQuery("")}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      <FaTimes />
                    </button>
                  )}
                  <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                </div>
              </div>

              {/* Left Section - Logo */}
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-lg bg-[#FFB53F] flex items-center justify-center">
                  <FaHome className="text-[#182338] text-xl" />
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="p-6">
          <div className="space-y-6">
            {/* Three Gray Cards */}
            <div className="bg-gray-300 h-48 rounded-xl shadow-md"></div>
            <div className="bg-gray-300 h-64 rounded-xl shadow-md"></div>
            <div className="bg-gray-300 h-48 rounded-xl shadow-md"></div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;