import { FaLocationDot, FaPhone, FaInstagram } from "react-icons/fa6";
import { HiGlobeAlt } from "react-icons/hi";

function Information() {
  return (
    <>
      <section className="w-[95%] lg:w-[80%] mx-auto mt-10 lg:mt-15 border border-gray-200 rounded-xl bg-white p-6 lg:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10">
          <div className="flex flex-col gap-6 w-full lg:w-1/2">
            <div className="flex gap-3 items-center">
              <span>
                <FaLocationDot className="text-[#FFB53F] text-2xl lg:text-3xl" />
              </span>
              <span className="text-black text-sm lg:text-base">
                اصفهان / چهارباغ عباسی / بازار ملت
              </span>
            </div>

            <div className="flex gap-3 items-center">
              <span>
                <FaPhone className="text-[#FFB53F] text-2xl lg:text-3xl" />
              </span>
              <span className="text-black text-sm lg:text-base">
                09123456789
              </span>
            </div>

            <div className="flex gap-3 items-center">
              <span>
                <FaInstagram className="text-[#FFB53F] text-2xl lg:text-3xl" />
              </span>
              <span className="text-black text-sm lg:text-base">@jambers</span>
            </div>

            <div className="flex gap-3 items-center">
              <span>
                <HiGlobeAlt className="text-[#FFB53F] text-2xl lg:text-3xl" />
              </span>
              <span className="text-black text-sm lg:text-base">
                www.jambs.ir
              </span>
            </div>
          </div>

          <div className="w-full lg:w-1/2 h-62.5 sm:h-75 lg:h-75 relative group overflow-hidden rounded-[8px] border-4 border-gray-100">
            <a
              href="https://www.google.com/maps/search/?api=1&query=اصفهان+چهارباغ+عباسی+بازار+ملت"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full h-full"
            >
              <img
                src="/public/images/photo-1524661135-423995f22d0b.avif"
                alt="Map View"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="absolute bottom-4 right-4 bg-[#FFB53F] text-black px-3 py-1.5 lg:px-4 lg:py-2 rounded-[5px] text-xs lg:text-sm font-bold">
                مشاهده در نقشه
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Information;
