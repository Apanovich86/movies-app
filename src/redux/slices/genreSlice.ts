import {IGenre} from "../../interfaces/genreInterface";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import genreService from "../../services/genreService";
import {AxiosError} from "axios";

type SliceState = {
    genres: IGenre[];
}

const genreInitialState: SliceState = {
    genres: []
}

export const loadGenres = createAsyncThunk("genreSlice/loadGenres",
    async (_, thunkAPI) => {
        try {
            const genres = await genreService.getAll();
            return thunkAPI.fulfillWithValue(genres);
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    })

export const genreSlice = createSlice({
    name: 'genreSlice',
    initialState: genreInitialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loadGenres.fulfilled, (state, action) => {
            state.genres = action.payload;
        })
    }
})

