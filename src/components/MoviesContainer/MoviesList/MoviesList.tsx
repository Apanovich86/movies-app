import React, {useState} from 'react';
import "./MoviesList.css"
import MoviesListCard from "../MoviesListCard/MoviesListCard";
import usePaginatedFetchMovies from "../../../services/PaginateMovies";

const MoviesList = () => {
    const [page, setPage] = useState<number>(1);
    const {data: movies, isLoading} = usePaginatedFetchMovies(page);

    return (
        <div className={"container"}>
            {isLoading ? (
                <h2>Loading...</h2>
            ) : (
                <div className={"cards"}>
                    {movies?.map((movie) => (
                        <div key={movie.id}>
                            <MoviesListCard movie={movie}/>
                        </div>
                    ))}
                </div>)}
            <footer style={{margin: "10px"}}>
                <button
                    className="btn btn-primary"
                    type="button"
                    onClick={() => setPage((prevPage) => prevPage - 1)}
                    disabled={page === 1 ? true : false}
                >
                    Prev
                </button>
                <p style={{display: "inline", margin: "10px"}}>{page}</p>
                <button
                    className="btn btn-primary"
                    type="button"
                    onClick={() => setPage((prevPage) => prevPage + 1)}
                    disabled={false}
                >
                    Next
                </button>
            </footer>
        </div>
    );
};

export default MoviesList;