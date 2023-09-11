import React, {FC, PropsWithChildren} from 'react';
import {IMovie} from "../../interfaces/moviesInterface";
import style from './MLC.module.css'

interface IProps extends PropsWithChildren {
    film: IMovie
}
const MovieListCard: FC<IProps> = ({film}) => {
    return (
        <div className={style.card}>
            <h5>{film.title}</h5>
            <img src={`https://image.tmdb.org/t/p/w300${film.poster_path}`} alt="poster" />
            <p>{film.overview}</p>
        </div>
    );
};

export default MovieListCard;