import React, { FC, useEffect, useState } from 'react';
import { listService } from "../../services/listService";
import {IMovie, IMovieListResponse} from "../../interfaces/moviesInterface";
import style from './MovieList.module.css'
import MovieListCard from "../MovieListCard/MovieListCard";

interface IProps {

}

const MoviesList: FC<IProps> = () => {
    const [movies, setMovies] = useState<IMovie[]>([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await listService.getAll();
                const { data } = response as { data: IMovieListResponse };
                setMovies((prevList) => [...prevList, ...data.results]);
            } catch (error) {
                console.error("Произошла ошибка при загрузке фильмов:", error);
            }
        };

        fetchMovies();
    }, []);

    return (
        <div className={style.list}>
            {movies.map((film) => (
                <MovieListCard key={film.id} film={film} />
            ))}
        </div>
    );
};

export default MoviesList;
