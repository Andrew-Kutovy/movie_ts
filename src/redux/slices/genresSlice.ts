import {createSlice} from "@reduxjs/toolkit";

const initialState ={
    genres: [],
    selectedGenre: null,
    loading: false,
    error: null
}

const genresSlice = createSlice({
    name: 'genresSlice',
    initialState,
    reducers:{

    }
})

const {reducer: genreReducer, actions} = genresSlice

const genreActions = {

}

export {genreReducer, genreActions}