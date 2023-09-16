import {createSlice} from "@reduxjs/toolkit";
import {IExtendedMovie, IMovie} from "../../interfaces/moviesInterface";
import {IGenre} from "../../interfaces/genreInterface";

interface IState {
    genres: IGenre[];
    error: string | null;
    loading: boolean;
}

const initialState: IState ={
    genres: [],
    loading: false,
    error: null
}

const genresSlice = createSlice({
    name: 'genresSlice',
    initialState,
    reducers:{
        setGenres: (state, action) => {
            state.genres = action.payload
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
    }
})

const {reducer: genreReducer, actions} = genresSlice

// const genreActions = {
//     ...actions
// }
export const { setGenres, setLoading, setError } = actions;

export {genreReducer}