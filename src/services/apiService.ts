import axios, {AxiosInstance, AxiosResponse} from "axios";
import {baseURL, token} from "../constants/urls";

type IRes<T> = Promise<AxiosResponse<T>>
export const apiService:AxiosInstance = axios.create({
    baseURL,
    headers:{
        Authorization: `Bearer ${token}`
    }
})

export type {IRes}
