
import { getApi } from "lib/fetch"
import { buildResponse } from "utils/responseBuilder";

export const doGetProducts = async () => {
    const response = await getApi()
        .get("/products")
        .then((res) => {
            return buildResponse(true, res.data);
        })
        .catch((err) => {
            return buildResponse(false, err.response.data, err.response.status);
        });

    return response;
}