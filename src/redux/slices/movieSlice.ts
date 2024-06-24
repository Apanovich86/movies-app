import {IMovie} from "../../interfaces/movieInterface";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";
import {movieService} from "../../services/movieService";

type SliceState = {
    movies: IMovie[];
    movie: IMovie | null;
    error?: Error
}

const movieInitialState: SliceState = {
    movies: [],
    movie: null
}

export const loadMovies = createAsyncThunk('movieSlice/loadMovies',
    async (_, thunkAPI) => {
        try {
            const movies = await movieService.getAll();
            return thunkAPI.fulfillWithValue(movies);
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
)

export const loadMovieById = createAsyncThunk(
    'movieSlice/loadMovieById',
    async (id: string | undefined, thunkAPI) => {
        if (id) {
            try {
                const movie = await movieService.getById(id);
                return thunkAPI.fulfillWithValue(movie);

            } catch (e) {
                const error = e as AxiosError;
                return thunkAPI.rejectWithValue(error.response?.data);
            }
        }
        return null;
    }
)

export const movieSlice = createSlice({
    name: 'movieSlice',
    initialState: movieInitialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loadMovies.fulfilled, (state, action) => {
            state.movies = action.payload;
        })
            .addCase(loadMovieById.fulfilled, (state, action) => {
                    state.movie = action.payload;
                }
            )
    },
})


