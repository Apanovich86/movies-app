const baseURL = 'https://api.themoviedb.org/3';

const movies = '/discover/movie';
const genres = '/genre/movie/list';
const movieById = '/movie/';
const genreById = '/genre/';
const urls = {
    movies:{
        base:movies,
        byId: (id: string): string => movieById + id
    },
    genres:{
        base:genres,
        byId: (id: string): string => genreById + id
    }
}
export {
    baseURL,
    urls
}