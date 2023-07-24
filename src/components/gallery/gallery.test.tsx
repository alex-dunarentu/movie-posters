import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../utils/test-utils';
import Gallery from './gallery.component';

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

describe('Gallery Component', () => {
  it('renders movie list with correct titles and years', () => {
    renderWithProviders(
      <Gallery sortOption="Title" orderOption="Ascending" setSortOption={() => {}} setOrderOption={() => {}} />,
      {
        preloadedState: {
          movies: {
            cachedMovies: { Movie: movies },
            loading: false,
            movies: movies,
          },
        },
      }
    );

    // Check if all movies are rendered
    const movieElements = screen.getAllByRole('img');
    expect(movieElements).toHaveLength(movies.length);

    // Check if correct movie titles and years are displayed
    movies.forEach((movie) => {
      const titleElement = screen.getByText(movie.Title);
      const yearElement = screen.getByText(movie.Year);
      expect(titleElement).toBeInTheDocument();
      expect(yearElement).toBeInTheDocument();
    });
  });
});
