import React from 'react';
import {useParams} from "react-router-dom";
import PosterPreview from "../PosterPreview/PosterPreview";
import StarsRating from "../StarsRating";
import "./MovieInfo.css"
import {useFetchMovieById} from "../../services/movieService";

const MovieInfo = () => {
    const {id} = useParams();
    const {data: movie} = useFetchMovieById(id || "");

    return (
        <div>
            <div className="d-flex">

                <div className="poster">
                    <PosterPreview poster_path={movie?.poster_path}/>
                </div>
                <div className="movieInfo">
                    <div>{movie?.genres.map(({name}) => <div className="badge">{name}</div>)}</div>
                    <br/>
                    <StarsRating vote_average={movie?.vote_average}/>
                    <h3>{movie?.vote_average}</h3>
                    <h1>{movie?.original_title}</h1>
                    <div>{movie?.overview}</div>
                    <br/>
                    <div><strong>Release date:</strong> {movie?.release_date}</div>
                    <br/>
                    <div><strong>Popularity:</strong> {movie?.popularity}</div>
                </div>
            </div>
        </div>
    );
};

export default MovieInfo;