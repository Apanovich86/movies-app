import React from 'react';
import {useAppSelector} from "../../../redux/hooks";
import "./MoviesList.css"
import MoviesListCard from "../MoviesListCard/MoviesListCard";

interface IMoviesProps {
    movie?: boolean
}

const MoviesList = ({movie}: IMoviesProps) => {
    const state = useAppSelector((state) => state.moviesSlice)
    return (
        <div className={"container"}>
            {movie && <h1>Movies</h1>}
            {state.error && (
                <span>
                    Error in movies state: {state.error.message}
                </span>
            )}

            <div className={"cards"}>
                {state.movies.map((movie) => (
                    <div key={movie.id}>
                        <MoviesListCard movie={movie}/>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default MoviesList;