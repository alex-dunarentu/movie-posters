import { combineReducers } from '@reduxjs/toolkit';

import { moviesReducer } from './movies/movies.reducer';

export const rootReducer = combineReducers({
  movies: moviesReducer,
});
