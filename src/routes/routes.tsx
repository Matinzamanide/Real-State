import AboutPage from "../pages/about/page";
import DashboardLayout from "../pages/admin/dashboard";
import LoginPage from "../pages/admin/login";
import Article from "../pages/article/page";
import Articles from "../pages/articles/articles";
import Home from "../pages/Home/home";
import Services from "../pages/services/services";

export const routes=[
    {
        path:"/",
        element:<Home/>
    },
    {
        path:"/services",
        element:<Services/>
    },
    {
        path:"/articles",
        element:<Articles/>
    },
    {
        path:"/admin/login",
        element:<LoginPage/>
    },
    {
        path:"/about",
        element:<AboutPage/>
    },
    {
        path:"/admin/dashboard",
        element:<DashboardLayout/>
    },
    {
        path:"مقالات/:id",
        element:<Article/>
    },
]