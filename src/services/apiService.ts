import axios, {AxiosInstance, AxiosResponse} from "axios";
import {baseURL, token} from "../constants/urls";

type IRes<DATA> = Promise<AxiosResponse<DATA>>
export const apiService:AxiosInstance = axios.create({
    baseURL,
    headers:{
        Authorization: `Bearer ${token}`
    }
})

export type {IRes}
