import {IMovie, MoviesResponseModel} from "../interfaces/movieInterface";
import {urls} from "../constants/urls";
import {axiosInstance} from "./apiService";

const movieService = {
    getAll: async (): Promise<IMovie[]> => {
        const response = await axiosInstance.get<MoviesResponseModel>(urls.movies.base);
        console.log(response);
        return response.data.results;
    },
    getById: async (id: string):Promise<IMovie> => {
        const response = await axiosInstance.get<IMovie>(urls.movies.byId(id));
        return response.data;
    }
}

export {movieService}