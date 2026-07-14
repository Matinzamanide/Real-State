import { FaHandshakeSimple } from "react-icons/fa6";
import { IoPersonOutline } from "react-icons/io5";
import { MdMapsHomeWork, MdPersonPin } from "react-icons/md";
import { RiShieldStarFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const HeroSection = () => {
    return ( 
        <div className="relative w-full text-white ">
        <img
          src="/public\images\hed.svg"
          alt="background"
          className="absolute inset-0 w-full h-full object-cover z-0 "
        />
        <div className="relative z-10 flex flex-col min-h-screen">
          <main className="pt-32 w-[95%] md:w-[85%] mx-auto flex flex-col md:flex-row justify-around md:justify-between items-center px-4 md:px-8 min-h-[70vh] gap-10 md:gap-0">
            <div className="rightOfMain flex flex-col items-center md:items-start text-center md:text-right w-full md:w-[45%] mt-8 md:mt-0">
              <h1 className="text-2xl  md:text-3xl lg:text-4xl font-black leading-tight">
                خانه رویایی شما
                <br />
                <span className="text-[#FFB53F]">تخصص و تعهد من</span>
              </h1>
  
              <p className="text-sm md:text-base lg:text-lg text-gray-200 mt-4 leading-relaxed text-center md:text-justify lg:text-justify">
                با سال‌ها تجربه در زمینه خرید و فروش و مشاوره املاک، به شما کمک
                می‌کنم بهترین تصمیم را برای آینده خود بگیرید.
              </p>
  
              <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-8">
                <Link
                  to="/properties"
                  className="px-4 md:px-5 py-2.5 rounded-[8px] flex items-center gap-2 border border-[#FFB53F] hover:bg-[#FFB53F]/10 transition-all"
                >
                  <img className="w-4 md:w-5" src="/images/Frame.svg" alt="" />
                  <span className="text-sm md:text-base">مشاهده املاک</span>
                </Link>
  
                <Link
                  to="/about"
                  className="bg-white text-black flex items-center gap-2 px-4 md:px-5 py-2.5 rounded-[8px] hover:bg-gray-200 transition-all"
                >
                  <IoPersonOutline className="w-5 md:w-6 lg:w-7" />
                  <span className="text-sm md:text-base">درباره ما</span>
                </Link>
              </div>
            </div>
  
            <div className="leftOfMain w-[90%] mx-auto md:w-[45%] flex justify-center items-center">
              <img
                src="/public/images/images.png"
                alt="house"
                className="w-3/4 md:w-[70%] md:max-w-[400px] object-contain md:mr-auto"
              />
            </div>
          </main>
  
          {/* باکس درباره ما  */}
          <section className="relative lg:absolute left-0 right-0 bottom-0 z-30 lg:translate-y-[70%] border-4 md:border-8 border-gray-300 mx-auto bg-white text-black w-[85%] max-w-7xl rounded-2xl py-8 px-4 md:px-8 shadow-2xl mt-12 lg:mt-0 lg:mb-12 flex flex-col lg:flex-row flex-wrap lg:flex-nowrap gap-0 lg:gap-4 mb-8">
            <div className="border-b-2 lg:border-b-0 lg:border-l-2 py-5 pl-0 lg:pl-10 xl:pl-18 border-gray-300 w-full lg:w-auto text-center lg:text-right">
              <h4 className="font-black text-2xl md:text-3xl">
                <span className="border-b-4 border-[#FFB53F]">درباره </span>ما
              </h4>
              <p className="pt-4 lg:pt-8 text-sm md:text-base">
                مشاور و فروشنده املاک با بیش از ۱۰ سال تجربه در بازار مسکن هستیم.
                هدف ما ارائه خدمات حرفه‌ای و ایجاد تجربه‌ای مطمئن و آسان برای
                مشتریان است.
              </p>
            </div>
  
            <div className="border-b-2 lg:border-b-0 lg:border-l-2 pl-0 lg:pl-4 xl:pl-8 border-gray-300 text-center py-5 px-3 w-full sm:w-full lg:w-auto">
              <span className="flex justify-center">
                <MdPersonPin className="text-6xl md:text-7xl w-full pb-3 md:pb-5" />
              </span>
              <span className="font-extrabold text-sm md:text-base">
                مشاوره تخصصی
              </span>
              <p className="text-xs pt-3">
                ارائه راهکارهای اختصاصی متناسب با نیاز و بودجه شما
              </p>
            </div>
  
            <div className="border-b-2 lg:border-b-0 lg:border-l-2 pl-0 lg:pl-4 xl:pl-8 border-gray-300 text-center py-5 px-3 w-full sm:w-full lg:w-auto">
              <span className="flex justify-center">
                <MdMapsHomeWork className="text-6xl md:text-7xl w-full pb-3 md:pb-5" />
              </span>
              <span className="font-extrabold text-sm md:text-base">
                شناخت بازار
              </span>
              <p className="text-xs pt-3">
                آشنایی کامل با مناطق مختلف و تحلیل دقیق بازار
              </p>
            </div>
  
            <div className="border-b-2 lg:border-b-0 lg:border-l-2 pl-0 lg:pl-4 xl:pl-8 border-gray-300 text-center py-5 px-3 w-full sm:w-full lg:w-auto">
              <span className="flex justify-center">
                <RiShieldStarFill className="text-6xl md:text-7xl w-full pb-3 md:pb-5" />
              </span>
              <span className="font-extrabold text-sm md:text-base">
                تجربه و تخصص
              </span>
              <p className="text-xs pt-3">
                سال‌ها تجربه موفق در بازار املاک و معاوضه رضایت‌بخش
              </p>
            </div>
  
            <div className="pl-0 lg:pl-4 xl:pl-8 text-center py-5 px-3 w-full sm:w-full lg:w-auto">
              <span className="flex justify-center">
                <FaHandshakeSimple className="text-6xl md:text-7xl w-full pb-3 md:pb-5" />
              </span>
              <span className="font-extrabold text-sm md:text-base">
                تعهد و صداقت
              </span>
              <p className="text-xs pt-3">
                صداقت در مشاوره و تعهد به بهترین نتیجه برای شما
              </p>
            </div>
          </section>
        </div> 
      </div>
     );
}
 
export default HeroSection;