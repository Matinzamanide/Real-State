import { FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <div className="">
            <div className="bg-[#182338] px-10 py-3 text-white flex justify-between items-center">
                <img src="./images/amlak.png" className="w-[200px]" alt="" />
                <ul className="flex gap-16">
                    <Link to={""}>
                        <li>صفحه اصلی</li>
                    </Link>
                    <Link to={""}>
                        <li>درباره ما</li>
                    </Link>
                    <Link to={""}>
                        <li>املاک</li>
                    </Link>
                    <Link to={""}>
                        <li>خدمات</li>
                    </Link>
                    <Link to={""}>
                        <li>مقالات</li>
                    </Link>
                    <Link to={""}>
                        <li>ارتباط با ما</li>
                    </Link>
                </ul>
                <button className="flex items-center border px-7 py-2 rounded-md">
                    <FaPhone />
                    <span className="mr-3">تماس مستقیم</span>

                </button>
            </div>
            <div className="relative">
        <img src="./images/hed.svg" className="mx-auto" alt="" />
        <div className="absolute top-45 text-5xl text-white">
            <h1>خانه رویای شما</h1>
            <h1>تخصص و تعهد من</h1>
            </div>
            </div>


        </div>
     );
}
 
export default Navbar;