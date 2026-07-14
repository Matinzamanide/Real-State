import type { IChildren } from "../types/type";
import Navbar from "./navbar";

const Layout :React.FC<IChildren> = ({children}) => {
    return ( 
        <div className="">
            <Navbar/>
            {children}
        </div>
     );
}
 
export default Layout;