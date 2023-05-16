import axios from "axios";
import { constants } from "../utils/constants"
// import store from "../store"

export const getApi = () => {
    // const newState = store.getState();
    // const token = newState ? newState.auth.token : null;
    return axios.create({
        baseURL: constants.API_BASE_URL + constants.API.PREFIX,
        headers: {
            // Authorization: `Bearer ${token}`,
            "Content-type": "application/json",
            withCredentials: true
        }
    });
};

// export const getApiForFormData = () => {
//     const newState = store.getState();
//     const token = newState ? newState.auth.token : null;
//     return axios.create({
//         baseURL: constants.API_BASE_URL + constants.API.PREFIX,
//         headers: {
//             Authorization: token ? "Bearer " + token : null,
//             "Content-type": "multipart/form-data",
//         },
//     });
// };