import Login from "@pages/auth/Login"
import Signup from "@pages/auth/Signup"
import { NotFound } from "pages/NotFound"

const routes = [
    {
        path: "/",
        redirectTo: "/login"
    },
    // {
    //     path: "*",
    //     redirectTo: "/notices"
    // },
    {
        path: "/login",
        component: Login
    },
    {
        path: "/signup",
        component: Signup
    },
    {
        path: "*",
        component: NotFound
    },
]

export default routes
