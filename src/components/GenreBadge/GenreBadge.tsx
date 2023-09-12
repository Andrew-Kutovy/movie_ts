import React, {useEffect, useState} from 'react';
import {IGenre, IGenreList} from "../../interfaces/genreInterface";
import {genreService} from "../../services/genreService";
import {Link} from "react-router-dom";

const GenreBadge = () => {
    const [genres, setGenres] = useState<IGenre[]>([])

    useEffect(() => {
        genreService.getAll().then(({data}) => setGenres(data.genres as IGenre[]))
    }, []);

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