import React, {FC, PropsWithChildren} from 'react';
import StarRatings from 'react-star-ratings';
import {IMovie} from "../../interfaces/moviesInterface";
import style from './MLC.module.css'
import {Link} from "react-router-dom";

interface IProps extends PropsWithChildren {
    film: IMovie
}

const MovieListCard: FC<IProps> = ({film}) => {
    return (
        <Link to={`/details/${film.id}`} className={style.card}>
            <h5>{film.title}</h5>
            <img src={`https://image.tmdb.org/t/p/w300${film.poster_path}`} alt="poster" />
            <p>{film.overview}</p>
            <StarRatings rating={film.vote_average / 2} starRatedColor="#f1c40f" starEmptyColor="#dcdcdc"
                         starDimension="30px" starSpacing="2px"/>
        </Link>
    );
};

export default MovieListCard;