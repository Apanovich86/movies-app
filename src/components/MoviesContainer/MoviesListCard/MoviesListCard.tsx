import React, {FC, PropsWithChildren} from 'react';
import {IMovie} from "../../../interfaces/movieInterface";
import {Link, useNavigate} from "react-router-dom";
import PosterPreview from "../../PosterPreview/PosterPreview";
import StarsRating from "../../StarsRating";

interface IProps extends PropsWithChildren {
    movie: IMovie
}

const MoviesListCard: FC<IProps> = ({movie}) => {
    let navigate = useNavigate();
    return (
        <Link to={`${movie.id}`}>
            <PosterPreview poster_path={movie.poster_path}/>
            <h3>{movie.original_title}</h3>
            <StarsRating vote_average={movie.vote_average}/>
        </Link>
    );
};

export default MoviesListCard;