
import React, { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import apiService from '../../../services/apiService';
import { urls } from '../../../constants/urls';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { movieAction } from '../../../redux/slices/moviesSlice';
import Pagination from '@mui/material/Pagination';

const GenreMovies = () => {
    const { genreId } = useParams<{ genreId: string }>();
    const dispatch = useDispatch();
    const movies = useSelector((state: RootState) => state.movies.movies);
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const genreName = searchParams.get('name') || '';
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 20;

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await apiService.get(urls.list, {
                    params: {
                        with_genres: genreId,
                        page: currentPage,
                        per_page: itemsPerPage,
                    },
                });
                dispatch(movieAction.setMovies(response.data.results));
            } catch (error) {
                console.error('Failed to fetch movies', error);
            }
        };
        fetchMovies();
    }, [dispatch, genreId, currentPage]);

    const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
        setCurrentPage(page);
    };

    return (
        <div>
            <div>
                <h1>Genre: {genreName}</h1>
                {movies.map((movie) => (
                    <div key={movie.id}>
                        <Link to={`/details/${movie.id}`}>{movie.title}</Link>
                        <p>{movie.overview}</p>
                        <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt="poster" />
                    </div>
                ))}
                <Pagination
                    count={10} // Задайте общее количество страниц
                    page={currentPage}
                    onChange={handlePageChange}
                />
            </div>
        </div>
    );
};

export default GenreMovies;
