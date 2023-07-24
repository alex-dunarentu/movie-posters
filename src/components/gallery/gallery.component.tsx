import { FC, useMemo } from 'react';

import { useAppSelector } from '../../store/hooks';
import { selectMovies } from '../../store/movies/movies.selector';

import { useMediaQuery } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

import { SortOption, OrderOption } from '../../types/sort';

import SortGallery from '../sort-gallery/sort-gallery.component';
import Placeholder from '../../assets/placeholder.jpg';

import { sortMovies } from '../../utils/sort-movies/sort-movies';

type GalleryProps = SortOption & OrderOption;

const Gallery: FC<GalleryProps> = ({ orderOption, setOrderOption, sortOption, setSortOption }) => {
  const movies = useAppSelector(selectMovies);

  const sortedMovies = useMemo(() => sortMovies(movies, sortOption, orderOption), [movies, sortOption, orderOption]);

  const isScreenSmallerThan540px = useMediaQuery('(max-width:540px)');
  const imageListWidth = isScreenSmallerThan540px ? '100%' : 500;
  const imageListCols = isScreenSmallerThan540px ? 1 : 2;

  return movies.length ? (
    <>
      <SortGallery
        sortOption={sortOption}
        setSortOption={setSortOption}
        orderOption={orderOption}
        setOrderOption={setOrderOption}
      />

      <ImageList sx={{ width: imageListWidth, height: 450, margin: '50px auto' }} cols={imageListCols}>
        {sortedMovies.map(({ Poster, Title, imdbID, Year }) => (
          <ImageListItem key={imdbID}>
            <img src={Poster.includes('N/A') ? Placeholder : Poster} alt={Title} loading="lazy" />
            <ImageListItemBar title={Title} subtitle={Year} />
          </ImageListItem>
        ))}
      </ImageList>
    </>
  ) : (
    <></>
  );
};

export default Gallery;
