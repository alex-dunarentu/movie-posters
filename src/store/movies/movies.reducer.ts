import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { Movie } from '../../types/movie';
import { MoviesAPI } from '../../services';

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async (title: string) => {
  try {
    const movies = await MoviesAPI.getMoviesByTitle(title);
    return { movies, title };
  } catch (error) {
    console.log('Error in fetchMovies', error);
  }
});

type MoviesState = {
  cachedMovies: { [title: string]: Movie[] };
  movies: Movie[];
  loading: boolean;
};

const MOVIES_INITIAL_STATE = {
  cachedMovies: {},
  movies: [],
  loading: false,
} as MoviesState;

export const moviesSlice = createSlice({
  name: 'movies',
  initialState: MOVIES_INITIAL_STATE,
  reducers: {
    setMovies(state, action) {
      state.movies = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.loading = false;
      if (action.payload !== undefined) {
        const { movies, title } = action.payload;

        state.movies = movies;
        state.cachedMovies = { ...state.cachedMovies, [title]: movies };
      }
    });
    builder.addCase(fetchMovies.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const { setMovies } = moviesSlice.actions;

export const moviesReducer = moviesSlice.reducer;
