import {IMovie, MoviesResponseModel} from "../interfaces/movieInterface";
import {urls} from "../constants/urls";
import {axiosInstance} from "./apiService";
import {useQuery} from "react-query";

const movieService = {
    getAll: async (): Promise<IMovie[]> => {
        const response = await axiosInstance.get<MoviesResponseModel>(urls.movies.base);
        return response.data.results;
    },
    getById: async (id: string): Promise<IMovie> => {
        const response = await axiosInstance.get<IMovie>(urls.movies.byId(id));
        return response.data;
    },
}

const useFetchMovieById = (movieId: string) =>
    useQuery(["movie", movieId], () => movieService.getById(movieId));
export {movieService, useFetchMovieById}