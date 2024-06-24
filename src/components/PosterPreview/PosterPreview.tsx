import React, {FC} from 'react';

interface IPosterPreviewProps {
    poster_path?: string
}

const PosterPreview: FC<IPosterPreviewProps> = ({poster_path}) => {
    return (
        <div>
            <div className={"card"}>
                <img src={`http://image.tmdb.org/t/p/w500/${poster_path}`}
                     alt={poster_path}/>
            </div>
        </div>
    );
};

export default PosterPreview;