import React, { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { apiService } from '../../../services/apiService';
import { urls } from '../../../constants/urls';

interface Movie {
    id: number;
    title: string;
    overview: string;
    poster_path: string;
}

const GenreMovies: React.FC = () => {
    const { genreId } = useParams<{ genreId: string }>();
    const [movies, setMovies] = useState<Movie[]>([]);
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const genreName = searchParams.get('name') || '';

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await apiService.get(urls.list, {
                    params: {
                        with_genres: genreId,
                    },
                });
                setMovies(response.data.results);
            } catch (error) {
                console.error('Failed to fetch movies', error);
            }
        };
        fetchMovies();
    }, [genreId]);

    console.log(movies);

    return (
        <div>
            <div>
                <h1>{genreName}</h1>
                {movies.map((movie) => (
                    <div key={movie.id}>
                        <Link to={`/details/${movie.id}`}>{movie.title}</Link>
                        <p>{movie.overview}</p>
                        <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt="poster" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GenreMovies;
