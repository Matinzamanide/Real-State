import axios from "axios";
import { useEffect, useState } from "react";
import type { ICustomer } from "../types/type";

const SpecialCustomers = () => {
    const [data, setData] = useState<ICustomer[]>([]);

    useEffect(() => {
        axios("http://localhost:8000/customers")
            .then((res) => {
                setData(res.data);
            });
    }, []);

    return (
        <div className="flex flex-col items-center justify-center bg-gray-50 py-8 px-4">
            {/* هدر */}
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold mb-1">مشتریان ویژه</h1>
                <h3 className="text-gray-600 text-sm">همکاری با مشتریان ویژه VIP</h3>
                <span className="mt-3 block w-16 h-0.5 bg-[#ffb53f] mx-auto"></span>
            </div>

            {/* کارت‌ها */}
            <div className="grid grid-cols-1 text-center md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
                {data.map((item, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
                        {/* نام */}
                        <p className="text-lg font-bold text-gray-800 mb-2">{item.name}</p>
                        
                        {/* آدرس */}
                        <p className="text-sm text-gray-600 mb-3"> آدرس : {item.address}</p>
                        
                        {/* تصاویر */}
                        <div className="flex items-center justify-center gap-7 mb-3">
                            {item.images.map((img, idx) => (
                                <img key={idx} className="w-20 h-20 rounded-lg object-cover border border-gray-200" src={img} alt="" />
                            ))}
                        </div>
                        
                        {/* شماره تلفن */}
                        <p className="text-sm font-medium mt-2">{item.phoneNumber}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SpecialCustomers;