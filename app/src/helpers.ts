import { AxiosResponse } from "axios";

const unwrapData = async <T = any>(response: Promise<AxiosResponse<T>>) => {
    const { data } = await response;

    return data;
}   

export {
    unwrapData
}