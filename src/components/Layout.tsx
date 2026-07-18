import type { IChildren } from "../types/type";
import Footer from "./footer";
import Navbar from "./navbar";

const Layout :React.FC<IChildren> = ({children}) => {
    return ( 
        <div className="">
            <Navbar/>
            {children}
            <Footer/>
        </div>
     );
}
 
export default Layout;