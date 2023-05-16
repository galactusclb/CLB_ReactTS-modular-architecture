// import store from "../store";
// import { authActions } from "../store/authSlice";

export const buildResponse = (success: boolean, data?: any, statusCode?: number) => {
    const urlSplitArr = window.location.href.toString().split("/");
    if (
        statusCode &&
        statusCode === 401 &&
        urlSplitArr.length >= 4 &&
        urlSplitArr[3] !== "auth"
    ) {
        // store.dispatch(authActions.logout());
        return { success: success, data: data };
    } else {
        return { success: success, data: data };
    }
};