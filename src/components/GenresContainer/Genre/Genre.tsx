import React, {FC, PropsWithChildren} from 'react';
import {IGenre} from "../../../interfaces/genreInterface";
import "./Genre.css"

interface IProps extends PropsWithChildren {
    genre: IGenre
}

const Genre: FC<IProps> = ({genre}) => {
   const {id, name} = genre;

    return (
        <div>
            <div className="genre">{name}</div>
        </div>
    );
};

export default Genre;