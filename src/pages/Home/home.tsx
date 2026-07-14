import PopularArticles from "../../components/articles";
import TestimonialsSection from "../../components/customers-opinion";
import OurServices from "../../components/our-services";
import SpecialCustomers from "../../components/special-customers";
import VIPState from "../../components/vip-state";
import HeroSection from "../../components/hero-section";
import FAQ from "../../components/faq";
import Footer from "../../components/footer";
import Information from "../../components/information";

const Home = () => {
    window.scroll({top:0,behavior:"smooth"})
    return ( 
        <>
        <HeroSection/>
        <VIPState/>
        <OurServices/>
        <SpecialCustomers/>
        <TestimonialsSection/>
        <FAQ/>
        <PopularArticles/>
        <Information/>
        <Footer/>
        </>
     );
}
 
export default Home;