import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import listService from "../../services/listService";
import apiService from "../../services/apiService";
import {urls} from "../../constants/urls";
import {IExtendedMovie, IMovie} from "../../interfaces/moviesInterface";
import {AxiosError} from "axios";

interface IState {
    movies: IMovie[];
    moviesByGenre: IMovie[];
    movieDetails: IExtendedMovie;
    error: string | null;
    loading: boolean;
}

const initialState: IState = {
    movies: [],
    moviesByGenre: [],
    movieDetails: null,
    error: null,
    loading: false
};

export const all = createAsyncThunk(
    'moviesSlice/all',
    async (page: number, {rejectWithValue}) => {
        try {
            const { data } = await listService.getAll(page);
            return data;
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data);
        }
    }
);

export const genre = createAsyncThunk(
    'moviesSlice/genre',
    async (genreId: number, {rejectWithValue}) => {
        try {
            const response = await apiService.get(urls.list, {
                params: {
                    with_genres: genreId,
                },
            });
            return response.data.results;
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data);
        }
    }
);

const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers: {
        setMovies: (state, action: PayloadAction<any[]>) => {
            state.movies = action.payload;
        },
        setMovieDetails: (state, action: PayloadAction<any>) => {
            state.movieDetails = action.payload;
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        setError: (state, action: PayloadAction<string | null>) => {
            state.error = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(all.fulfilled, (state, action) => {
                state.movies = [...state.movies, ...action.payload.results];
                state.loading = false;
                state.error = null;
            })
            .addCase(all.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(all.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || null;
            })
            .addCase(genre.fulfilled, (state, action) => {
                state.moviesByGenre = action.payload;
                state.loading = false;
                state.error = null;
            })
            .addCase(genre.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(genre.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || null;
            });
    },
});

const { reducer: movieReducer, actions } = moviesSlice;
const { setMovieDetails } = actions;

const movieAction = {
    ...actions,
    all,
    genre,
    setMovieDetails
};

export { movieReducer, movieAction };