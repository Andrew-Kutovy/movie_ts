import React, {useEffect} from 'react';
import {Link, useParams} from "react-router-dom";
import StarRatings from "react-star-ratings";
import {useDispatch, useSelector} from "react-redux";

import {detailService} from "../../services/detailService";
import style from './MovieInfo.module.css'
import {IExtendedMovie} from "../../interfaces/moviesInterface";
import {RootState} from "../../redux/store";
import {movieAction} from "../../redux/slices/moviesSlice";

const MovieInfo = () => {
    const { movieId } = useParams<{ movieId: string }>();
    const dispatch = useDispatch()
    const movieInfo = useSelector((state: RootState)=>state.movies.movieDetails)

    useEffect(() => {
        if (movieId) {
            const idAsNumber = parseInt(movieId, 10);
            dispatch(movieAction.setMovieDetails(null)); // Сбросить информацию о фильме в хранилище
            detailService.getById(idAsNumber).then(({ data }) => dispatch(movieAction.setMovieDetails(data as IExtendedMovie | null)));
        }
    }, [dispatch, movieId]);

    return (
        <div>
            {movieInfo ? (
                <div className={style.container}>
                    <img className={style.poster} src={`https://image.tmdb.org/t/p/w300${movieInfo.poster_path}`} alt="poster" />
                    <div>
                        <h1>{movieInfo.title}</h1>
                        <StarRatings rating={movieInfo.vote_average / 2} starRatedColor="#f1c40f" starEmptyColor="#dcdcdc" starDimension="30px" starSpacing="2px" />
                        <h3>Genres:</h3>
                        {movieInfo.genres.map((genre) => (
                            <Link className={style.genres} key={genre.id} to={`/genres/${genre.id}`}>
                                {genre.name}{' '}
                            </Link>
                        ))}
                        <h3>{movieInfo.tagline}</h3>
                        <h3>release date: {movieInfo.release_date}</h3>
                        <p>{movieInfo.overview}</p>
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default MovieInfo;