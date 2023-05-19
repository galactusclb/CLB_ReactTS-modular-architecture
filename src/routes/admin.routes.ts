import { RouteType } from "@models/Route.model"
import { NotFound } from "@pages/NotFound"
import Dashboard from "@pages/admin/Dashboard"
import FeedbackList from "@pages/admin/feedbacks/FeedackList"
import ProductList from "@pages/admin/products/ProductList"

const routes: RouteType[] = [
    {
        path: "/",
        redirectTo: "/dashboard"
    },
    {
        path: "/dashboard",
        component: Dashboard,
        roles: ["admin", "editor"]
    },
    {
        path: "/products",
        component: ProductList
    },
    {
        path: "/feedbacks",
        component: FeedbackList
    },
    // {
    //     path: "/feedbacks/:id",
    //     component: <FeedbackView />
    // },
    // {
    //     path: "/notices",
    //     component: <NoticeList />
    // },
    // {
    //     path: "/notices/create",
    //     component: <NoticeCreate />
    // },
    // {
    //     path: "/notices/:id",
    //     component: <NoticeView />
    // },
    // // {
    // //     path: "*",
    // //     component: <FeedbackList />
    // // },

    {
        path: "*",
        component: NotFound
    }
]

export default routes
