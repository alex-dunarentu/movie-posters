import { sortMovies } from './sort-movies';

const movies = [
  {
    Poster: 'poster_url_1',
    Title: 'Movie 1',
    Type: 'movie',
    Year: '2000',
    imdbID: '12345',
  },
  {
    Poster: 'poster_url_2',
    Title: 'Movie 2',
    Type: 'movie',
    Year: '1999',
    imdbID: '54321',
  },
];

describe('sortMovies', () => {
  it('should sort movies by year in ascending order', () => {
    const sortedMovies = sortMovies(movies, 'Year', 'Ascending');
    expect(sortedMovies).toEqual([
      {
        Poster: 'poster_url_2',
        Title: 'Movie 2',
        Type: 'movie',
        Year: '1999',
        imdbID: '54321',
      },
      {
        Poster: 'poster_url_1',
        Title: 'Movie 1',
        Type: 'movie',
        Year: '2000',
        imdbID: '12345',
      },
    ]);
  });

  it('should sort movies by year in descending order', () => {
    const sortedMovies = sortMovies(movies, 'Year', 'Descending');
    expect(sortedMovies).toEqual([
      {
        Poster: 'poster_url_1',
        Title: 'Movie 1',
        Type: 'movie',
        Year: '2000',
        imdbID: '12345',
      },
      {
        Poster: 'poster_url_2',
        Title: 'Movie 2',
        Type: 'movie',
        Year: '1999',
        imdbID: '54321',
      },
    ]);
  });

  it('should sort movies by title in ascending order', () => {
    const sortedMovies = sortMovies(movies, 'Title', 'Ascending');
    expect(sortedMovies).toEqual([
      {
        Poster: 'poster_url_1',
        Title: 'Movie 1',
        Type: 'movie',
        Year: '2000',
        imdbID: '12345',
      },
      {
        Poster: 'poster_url_2',
        Title: 'Movie 2',
        Type: 'movie',
        Year: '1999',
        imdbID: '54321',
      },
    ]);
  });

  it('should sort movies by title in descending order', () => {
    const sortedMovies = sortMovies(movies, 'Title', 'Descending');
    expect(sortedMovies).toEqual([
      {
        Poster: 'poster_url_2',
        Title: 'Movie 2',
        Type: 'movie',
        Year: '1999',
        imdbID: '54321',
      },
      {
        Poster: 'poster_url_1',
        Title: 'Movie 1',
        Type: 'movie',
        Year: '2000',
        imdbID: '12345',
      },
    ]);
  });
});
