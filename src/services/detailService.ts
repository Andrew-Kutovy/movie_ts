import {apiService, IRes} from "./apiService";
import {urls} from "../constants/urls";
import {IExtendedMovie} from "../interfaces/moviesInterface";

export const detailService = {
    getById: (id:number):IRes<IExtendedMovie> => apiService.get(urls.movieDetail.movieId(id))
}
