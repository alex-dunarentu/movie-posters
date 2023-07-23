import { createSelector } from 'reselect';
import { RootState } from '../store';

const selectMoviesReducer = (state: RootState) => state.movies;

export const selectMovies = createSelector([selectMoviesReducer], (movies) => movies.movies);

export const selectCachedMovies = createSelector([selectMoviesReducer], (movies) => movies.cachedMovies);

export const selectLoading = createSelector([selectMoviesReducer], (movies) => movies.loading);
