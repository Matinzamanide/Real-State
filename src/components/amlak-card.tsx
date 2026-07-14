import type { IVIPState } from "../types/type";

const AmlakCard: React.FC<IVIPState> = ({
  image,
  title,
  location,
  area,
  bedrooms,
  parking,
  price,
  period,
}) => {
  // فرمت کردن قیمت به صورت سه رقم سه رقم
  const formatPrice = (price: number | string) => {
    return parseInt(price.toString()).toLocaleString("fa-IR");
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100 max-w-sm mx-auto">
      {/* تصویر ملک */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-56 object-cover"
        />
      </div>

      {/* محتوای کارت */}
      <div className="p-5">
        {/* عنوان */}
        <h3 className="text-xl font-bold text-gray-900 mb-2 text-right">
          {title}
        </h3>

        {/* آدرس */}
        <p className="text-sm text-gray-500 mb-4 text-right">{location}</p>

        {/* مشخصات ملک */}
        <div className="flex justify-between items-center border-t border-gray-100 pt-4 mb-4">
          <div className="text-sm text-gray-600">
            {area} <span className="text-xs">متر</span>
          </div>
          <div className="text-sm text-gray-600">
            {bedrooms} <span className="text-xs">خواب</span>
          </div>
          <div className="text-sm text-gray-600">
            {parking} <span className="text-xs">پارکینگ</span>
          </div>
        </div>

        {/* قیمت */}
        <div className="flex justify-between items-center">
          <p className="text-lg font-bold text-gray-900">
            {formatPrice(price)} تومان
          </p>
          <span className="text-sm text-gray-500">{period}</span>
        </div>
      </div>
    </div>
  );
};

export default AmlakCard;