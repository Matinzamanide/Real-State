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
        path:"/مقالات/:id",
        element:<Article/>
    },
]