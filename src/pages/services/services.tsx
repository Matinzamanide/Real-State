import axios from "axios";
import { useEffect, useState } from "react";
import type { IVIPState } from "../../types/type";
import AmlakCard from "../../components/amlak-card";
import WorkProcess from "../../components/work-process";
import ServicesAbout from "../../components/services-about";
import PackageServices from "../../components/package-services";
import CardsSection from "../../components/cards-section";

const Services = () => {
    const [data,setData]=useState<IVIPState[]>([]);
    useEffect(()=>{
        axios("http://localhost:8000/real-states").then((res)=>{
            setData(res.data);
            console.log(res.data)
        })

        window.scrollTo({top:0,behavior:"smooth"})
    },[])
    return ( 
        <div className="pt-20">
            <ServicesAbout/>
            <PackageServices/>
            <WorkProcess/>
            <CardsSection/>
            <div className="flex flex-col items-center">
            <h1 className="text-4xl font-bold">خدمات تخصصی برای املاک</h1>
            <span className="block w-16 h-2 bg-[#FFB53F] mt-5"></span>
            </div>

            <div className=" grid lg:grid-cols-3 gap-10 mt-10">
                {
                    data.map((item)=>{
                        return <AmlakCard {...item}/>
                    })
                }
            </div>
        </div>
     );
}
 
export default Services;