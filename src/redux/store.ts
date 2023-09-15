import { configureStore } from "@reduxjs/toolkit";
import { movieReducer } from "./slices/moviesSlice";
import { genreReducer } from "./slices/genresSlice";

export const store = configureStore({
    reducer: {
        movies: movieReducer,
        genres: genreReducer
    }
});