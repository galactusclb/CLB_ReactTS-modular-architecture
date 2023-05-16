import { AxiosError, AxiosResponse } from "axios"
import { getApi } from "lib/fetch"
import { buildResponse } from "utils/responseBuilder"

export const doSignup = async (payload: {
    email: string,
    userName: string,
    password: string,
}) => {
    return await getApi().post("/auth/signup", payload)
        .then((res: AxiosResponse) => {
            return buildResponse(true, res.data)
        })
        .catch((err: AxiosError) => {
            return buildResponse(false, err.response?.data, err.response?.status)
        })
}

export const doLogin = async (payload: {
    userName: string,
    password: string,
}) => {
    return await getApi().post("/auth/login", payload)
        .then((res: AxiosResponse) => {
            return buildResponse(true, res.data)
        })
        .catch((err: AxiosError) => {
            return buildResponse(false, err.response?.data, err.response?.status)
        })
}

export const doLogout = async () => {
    return await getApi().post("/auth/logout")
        .then((res: AxiosResponse) => {
            return buildResponse(true, res.data)
        })
        .catch((err: AxiosError) => {
            return buildResponse(false, err.response?.data, err.response?.status)
        })
}