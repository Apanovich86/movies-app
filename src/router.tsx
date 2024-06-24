import {createBrowserRouter, Navigate} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import MoviesPage from "./pages/MoviesPage";
import Genres from "./components/GenresContainer/Genres/Genres";
import MovieInfo from "./components/MovieInfo/MovieInfo";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {index: true, element: <Navigate to={'movies'}/>},
            {path: 'movies', element: <MoviesPage/>},
            {path: 'movies/:id', element: <MovieInfo/>},
            {path: 'genres', element: <Genres/>}
        ]
    }
])

export {
    router
}