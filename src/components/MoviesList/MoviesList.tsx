import React, {useEffect, useState } from 'react';

import style from './MovieList.module.css'
import MovieListCard from "../MovieListCard/MovieListCard";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {movieAction} from "../../redux/slices/moviesSlice";


const MoviesList = () => {
    const dispatch = useAppDispatch()
    const {movies} = useAppSelector(state => state.movies)
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        dispatch(movieAction.all(currentPage))
    }, []);


    return (
        <div className={style.list}>
            {movies.map((film, id) => (
                <MovieListCard key={id} film={film} />
            ))}
        </div>
    );
};

export default MoviesList;
