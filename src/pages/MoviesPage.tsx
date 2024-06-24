import React, {useEffect} from 'react';
import MoviesList from "../components/MoviesContainer/MoviesList/MoviesList";
import {useAppDispatch} from "../redux/hooks";
import {loadMovies} from "../redux/slices/movieSlice";

const MoviesPage = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(loadMovies())
    }, [dispatch])
    return (
        <div>
            <MoviesList movie/>
        </div>
    );
};

export default MoviesPage;