import React, {FC, PropsWithChildren} from 'react';
import {IMovie} from "../../../interfaces/movieInterface";
import {Link, useNavigate} from "react-router-dom";
import PosterPreview from "../../PosterPreview/PosterPreview";
import StarsRating from "../../StarsRating";
import "./MovieListCard.css";

interface IProps extends PropsWithChildren {
    movie: IMovie
}

const MoviesListCard: FC<IProps> = ({movie}) => {
    return (
        <Link className="link" to={`${movie.id}`}>
            <PosterPreview poster_path={movie.poster_path}/>
            <h3>{movie.original_title}</h3>
            <StarsRating vote_average={movie.vote_average}/>
        </Link>
    );
};

export default MoviesListCard;