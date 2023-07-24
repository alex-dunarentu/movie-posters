import { Movie } from '../../types/movie';
import { OrderOptionType, SortOptionType } from '../../types/sort';

export const sortMovies = (movies: Movie[], sortOption: SortOptionType, orderOption: OrderOptionType): Movie[] => {
  const sortedMovies = [...movies];
  sortedMovies.sort((a, b) => {
    const sortOrder = orderOption === 'Ascending' ? 1 : -1;
    if (sortOption === 'Year') {
      return sortOrder * (parseInt(a.Year) - parseInt(b.Year));
    } else if (sortOption === 'Title') {
      return sortOrder * a.Title.localeCompare(b.Title);
    }
    return 0;
  });
  return sortedMovies;
};
