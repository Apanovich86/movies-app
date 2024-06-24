import {IMovie, MoviesResponseModel} from "../interfaces/movieInterface";
import {axiosInstance} from "./apiService";
import {urls} from "../constants/urls";
import {useQuery} from "react-query";

type PaginateFetch = (page: number) => Promise<IMovie[]>;

const fetchPaginatedMovies: PaginateFetch = async (page = 1) => {
    const response = await axiosInstance.get<MoviesResponseModel>(`${urls.movies.base}?page=${page}`);
    return response.data.results;

};

const usePaginatedFetchMovies = (page: number) =>
    useQuery(["movies", page], () => fetchPaginatedMovies(page), {
        keepPreviousData: true,
    });

export default usePaginatedFetchMovies;