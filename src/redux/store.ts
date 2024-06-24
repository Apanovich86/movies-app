import {configureStore} from "@reduxjs/toolkit";
import {movieSlice} from "./slices/movieSlice";
import {genreSlice} from "./slices/genreSlice";
import {themeSlice} from "./slices/themeSlice";

export const store = configureStore({
    reducer: {
        moviesSlice: movieSlice.reducer,
        genresSlice: genreSlice.reducer,
        theme: themeSlice.reducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch