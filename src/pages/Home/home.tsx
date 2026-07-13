import PopularArticles from "../../components/articles";
import TestimonialsSection from "../../components/customers-opinion";
import Navbar from "../../components/header";
import OurServices from "../../components/our-services";
import SpecialCustomers from "../../components/special-customers";
import VIPState from "../../components/vip-state";
import ContactSection from "../../components/about-us";
import Footer from "../../components/footer";

const Home = () => {
    return ( 
        <>
        <Navbar/>
        <VIPState/>
        <OurServices/>
        <SpecialCustomers/>
        <TestimonialsSection/>
        <PopularArticles/>
        <ContactSection/>
        <Footer/>
        </>
     );
}
 
export default Home;