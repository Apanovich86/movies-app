import React, {FC} from 'react';
import StarRatings from "react-star-ratings";

interface IStarProps {
    vote_average?: number
}
const StarsRating: FC<IStarProps> = ({vote_average}) => {
    return (
        <div>
            <StarRatings
                rating={vote_average}
                starDimension="20px"
                numberOfStars={10}
                starRatedColor="gold"
                starSpacing="0"
            />
        </div>
    );
};

export default StarsRating;