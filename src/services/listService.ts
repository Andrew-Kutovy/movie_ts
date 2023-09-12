import {apiService, IRes} from "./apiService";
import {urls} from "../constants/urls";
import {IMovieListResponse} from "../interfaces/moviesInterface";

export const listService = {
    getAll:(page:number):IRes<IMovieListResponse> => apiService.get(urls.list+`?page=${page}`)
}