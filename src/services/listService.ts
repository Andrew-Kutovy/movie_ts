import {apiService, IRes} from "./apiService";
import {urls} from "../constants/urls";
import {IMovieListResponse} from "../interfaces/moviesInterface";

export const listService = {
    getAll:():IRes<IMovieListResponse> => apiService.get(urls.list)
}