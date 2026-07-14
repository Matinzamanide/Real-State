import { FaPhone, FaInstagram, FaGlobe, FaMapMarkerAlt } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section className="bg-gray-50 z-50 py-12 md:py-16 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Title */}
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              ارتباط با ما
            </h2>
            <div className="w-12 h-1 bg-[#FFB53F] mx-auto rounded-full"></div>
          </div>

          {/* Card */}
          <div className="bg-white rounded-2xl border-4 border-gray-300 p-6 md:p-10 shadow-lg">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              {/* Map / Location Image - Left */}
              <div className="md:w-1/2 w-full flex justify-center">
                <div className="bg-[#FFB53F] rounded-lg w-full max-w-sm h-64 md:h-80 flex items-center justify-center relative">
                  <div className="text-center">
                    <FaMapMarkerAlt className="text-5xl md:text-6xl text-gray-800 mx-auto mb-2" />
                    <span className="text-2xl md:text-3xl font-bold text-gray-800">
                      location
                    </span>
                  </div>
                </div>
              </div>

              {/* Contact Info - Right */}
              <div className="md:w-1/2 w-full space-y-6">
                {/* Address */}
                <div className="flex items-center gap-4">
                  <FaMapMarkerAlt className="text-3xl md:text-4xl text-[#FFB53F] shrink-0" />
                  <span className="text-base md:text-lg text-gray-800 font-medium">
                    اصفهان/چهارباغ عباسی/بازار ملت
                  </span>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-4">
                  <FaPhone className="text-3xl md:text-4xl text-[#FFB53F] shrink-0" />
                  <span className="text-base md:text-lg text-gray-800 font-medium" dir="ltr">
                    09133252130
                  </span>
                </div>

                {/* Instagram */}
                <div className="flex items-center gap-4">
                  <FaInstagram className="text-3xl md:text-4xl text-[#FFB53F] shrink-0" />
                  <span className="text-base md:text-lg text-gray-800 font-medium" dir="ltr">
                    @jambrs.ir
                  </span>
                </div>

                {/* Website */}
                <div className="flex items-center gap-4">
                  <FaGlobe className="text-3xl md:text-4xl text-[#FFB53F] shrink-0" />
                  <span className="text-base md:text-lg text-gray-800 font-medium" dir="ltr">
                    www.jambrs.ir
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default ContactSection;