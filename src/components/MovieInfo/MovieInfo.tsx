import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {loadMovieById} from "../../redux/slices/movieSlice";
import PosterPreview from "../PosterPreview/PosterPreview";
import StarsRating from "../StarsRating";
import "./MovieInfo.css"
import genre from "../GenresContainer/Genre/Genre";

const MovieInfo = () => {
    const {id} = useParams();
    const {movie} = useAppSelector((state) => state.moviesSlice);
    const {genres} = useAppSelector((state) => state.genresSlice);
    const dispatch = useAppDispatch();
    let genresList;
    let genresString;

    useEffect(() => {
        dispatch(loadMovieById(id))
    }, [id]);
    return (
        <div>
            <div className="d-flex">

                <div className="poster">
                    <PosterPreview poster_path={movie?.poster_path}/>
                </div>
                <div className="movieInfo">
                   <div></div>
                    <StarsRating vote_average={movie?.vote_average}/>
                    <h1>{movie && movie.original_title}</h1>
                    <div>{movie && movie.overview}</div>
                    <br/>
                    <div><strong>Release date:</strong> {movie && movie.release_date}</div>
                </div>
            </div>
        </div>
    );
};

export default MovieInfo;