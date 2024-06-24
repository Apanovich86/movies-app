import {axiosInstance} from "./apiService";
import {urls} from "../constants/urls";
import {GenresResponseModel, IGenre} from "../interfaces/genreInterface";
import {IMovie} from "../interfaces/movieInterface";

const GenreService = {
    getAll: async (): Promise<IGenre[]> => {
        const response = await axiosInstance.get<GenresResponseModel>(urls.genres.base);
        return response.data.genres;
    },
    getById: async (id: string):Promise<IGenre> => {
        const response = await axiosInstance.get<IGenre>(urls.movies.byId(id));
        return response.data;
    }
}

export default GenreService;