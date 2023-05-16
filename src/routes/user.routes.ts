import Login from "@pages/auth/Login"
import Register from "@pages/auth/Register"
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
        path: "/register",
        component: Register
    },
    {
        path: "*",
        component: NotFound
    },
]

export default routes
