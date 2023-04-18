import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import MovieApi from "../../common/Api/MovieApi";
import { APIkey } from "../../common/Api/MovieApiKey";

export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async (term) => {

    const response = await MovieApi.get(`?apiKey=${APIkey}&s=${term}&type=movie`)

    return response.data;
})

export const fetchAsyncShows = createAsyncThunk('shows/fetchAsyncShows', async (term) => {

    const response = await MovieApi.get(`?apiKey=${APIkey}&s=${term}&type=series`)

    return response.data;
})

export const fetchAsyncMovieOrShowsDetails = createAsyncThunk('showsmovies/fetchAsyncMovieOrShowsDetails', async (id) => {
    const response = await MovieApi.get(`?apiKey=${APIkey}&i=${id}&Plot=full`)

    return response.data;
})

const initialState = {
    movies: {},
    shows: {},
    selectedMovieOrShow: {}
}

const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        removeSelectedMovieOrShow: (state) => {
            state.selectedMovieOrShow = {}
        }
    },
    extraReducers: {
        [fetchAsyncMovies.pending]: () => {
            console.log("pending")
        },
        [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
            console.log("fullfilled");
            return { ...state, movies: payload }
        },
        [fetchAsyncMovies.rejected]: () => {
            console.log("rejected")
        },
        [fetchAsyncShows.fulfilled]: (state, { payload }) => {
            console.log("fullfilled");
            return { ...state, shows: payload }
        },
        [fetchAsyncMovieOrShowsDetails.fulfilled]: (state, { payload }) => {
            console.log("fullfilled");
            return { ...state, selectedMovieOrShow: payload }
        },
    }
})

export const { removeSelectedMovieOrShow } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedShowsAndMovieDetails = (state) => state.movies.selectedMovieOrShow;
export default movieSlice.reducer;