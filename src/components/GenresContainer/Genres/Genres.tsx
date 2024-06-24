import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../../redux/hooks";
import {loadGenres} from "../../../redux/slices/genreSlice";
import Genre from "../Genre/Genre";
import "./Genres.css"

const Genres = () => {
const {genres} = useAppSelector((state) => state.genresSlice);
const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(loadGenres())
    }, [dispatch]);
    return (
        <div className="genres">
            {genres && genres.map(genre => <Genre key={genre.id} genre={genre}/>)}
        </div>
    );
};

export default Genres;