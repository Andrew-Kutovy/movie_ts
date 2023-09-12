import {apiService, IRes} from "./apiService";


import {urls} from "../constants/urls";
import {IGenreList} from "../interfaces/genreInterface";

export const genreService = {
    getAll: ():IRes<IGenreList> => apiService.get(urls.genres)
}