import React, {useEffect} from 'react';

import {genreService} from "../../services/genreService";
import {Link} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {setGenres} from "../../redux/slices/genresSlice";

const GenreBadge = () => {
    const dispatch = useAppDispatch()
    const genres = useAppSelector(state => state.genres.genres)

    useEffect(() => {
        genreService.getAll()
            .then((response) => {
                dispatch(setGenres(response.data.genres))
            })
    }, [dispatch]);


    return (
        <div>
            {genres.map((genre) => (
                <div key={genre.id}>
                    <Link to={`/genres/${genre.id}?name=${genre.name}`}>{genre.name}</Link>
                </div>
            ))}
        </div>
    );
};

export default GenreBadge;