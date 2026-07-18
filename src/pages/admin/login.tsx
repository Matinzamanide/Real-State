import { useState } from "react";
import { FaUser, FaLock, FaEye, FaEyeSlash, FaBuilding } from "react-icons/fa";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // اعتبارسنجی ساده
    if (!username || !password) {
      setError("لطفاً نام کاربری و رمز عبور را وارد کنید.");
      return;
    }

    setIsLoading(true);

    // شبیه‌سازی درخواست به سرور (اینجا باید API واقعی خود را فراخوانی کنید)
    setTimeout(() => {
      if (username === "admin" && password === "1234") {
        alert("ورود موفقیت‌آمیز بود! در حال انتقال به پنل...");
        // router.push('/dashboard');
      } else {
        setError("نام کاربری یا رمز عبور اشتباه است.");
      }
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex bg-white" dir="rtl">
      {/* --- بخش سمت راست: فرم ورود --- */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 md:p-12 relative">
        <div className="w-full max-w-md space-y-8">
          
          {/* لوگو و هدر */}
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#182338] text-[#FFB53F] mb-4 shadow-lg shadow-[#182338]/20">
              <FaBuilding className="text-3xl" />
            </div>
            <h2 className="text-3xl font-extrabold text-[#182338]">
              ورود به پنل مدیریت
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              برای دسترسی به داشبورد، اطلاعات حساب کاربری خود را وارد کنید.
            </p>
          </div>

          {/* فرم */}
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            {/* نمایش خطا */}
            {error && (
              <div className="bg-red-50 text-red-600 text-sm p-3 rounded-lg border border-red-200 text-center">
                {error}
              </div>
            )}

            <div className="space-y-5">
              {/* فیلد نام کاربری */}
              <div>
                <label htmlFor="username" className="block text-sm font-bold text-[#182338] mb-2">
                  نام کاربری
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <FaUser className="text-gray-400" />
                  </div>
                  <input
                    id="username"
                    name="username"
                    type="text"
                    autoComplete="username"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="block w-full pr-10 pl-3 py-3 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFB53F]/30 focus:border-[#FFB53F] transition-all duration-300 bg-gray-50 focus:bg-white"
                    placeholder="مثال: admin"
                  />
                </div>
              </div>

              {/* فیلد رمز عبور */}
              <div>
                <label htmlFor="password" className="block text-sm font-bold text-[#182338] mb-2">
                  رمز عبور
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <FaLock className="text-gray-400" />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full pr-10 pl-10 py-3 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFB53F]/30 focus:border-[#FFB53F] transition-all duration-300 bg-gray-50 focus:bg-white"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400 hover:text-[#182338] transition-colors"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>
            </div>

            {/* گزینه‌های اضافی (مرا به خاطر بسپار / فراموشی رمز) */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-[#FFB53F] focus:ring-[#FFB53F] border-gray-300 rounded cursor-pointer"
                />
                <label htmlFor="remember-me" className="mr-2 block text-sm text-gray-600 cursor-pointer">
                  مرا به خاطر بسپار
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-[#182338] hover:text-[#FFB53F] transition-colors">
                  رمز عبور را فراموش کرده‌اید؟
                </a>
              </div>
            </div>

            {/* دکمه ورود */}
            <button
              type="submit"
              disabled={isLoading}
              className="group relative w-full flex justify-center py-3.5 px-4 border border-transparent rounded-xl text-sm font-bold text-[#182338] bg-[#FFB53F] hover:bg-[#e5a339] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FFB53F] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-[#FFB53F]/30"
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-5 w-5 text-[#182338]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  در حال ورود...
                </span>
              ) : (
                "ورود به حساب کاربری"
              )}
            </button>
          </form>

          {/* فوتر کوچک */}
          <p className="mt-6 text-center text-xs text-gray-400">
            © ۱۴۰۵ تمامی حقوق برای املاک امیررضا محمدی محفوظ است.
          </p>
        </div>
      </div>

      {/* --- بخش سمت چپ: تصویر/برندینگ (فقط در دسکتاپ نمایش داده می‌شود) --- */}
      <div className="hidden lg:flex lg:w-1/2 bg-[#182338] relative overflow-hidden items-center justify-center">
        {/* پترن یا تصویر پس‌زمینه */}
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000" 
          alt="Real Estate" 
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        
        {/* المان‌های گرافیکی تزئینی (دایره‌های طلایی محو) */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFB53F] rounded-full blur-[120px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FFB53F] rounded-full blur-[120px] opacity-20 translate-y-1/2 -translate-x-1/2"></div>

        {/* متن خوش‌آمدگویی */}
        <div className="relative z-10 text-center px-12">
          <h1 className="text-4xl font-extrabold text-white mb-6 leading-tight">
            مدیریت هوشمند <br />
            <span className="text-[#FFB53F]">املاک و مستغلات</span>
          </h1>
          <p className="text-gray-300 text-lg leading-8 max-w-md mx-auto">
            با ورود به پنل مدیریت، به تمام ابزارهای تحلیل بازار، مدیریت املاک و پیگیری مشتریان دسترسی خواهید داشت.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;