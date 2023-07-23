import { FC } from 'react';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { selectCachedMovies } from '../../store/movies/movies.selector';
import { fetchMovies } from '../../store/movies/movies.reducer';
import { setMovies } from '../../store/movies/movies.reducer';
import Button from '@mui/material/Button';

import FileDownloadIcon from '@mui/icons-material/FileDownload';
import FileDownloadDoneIcon from '@mui/icons-material/FileDownloadDone';

type LoadMovieProps = {
  title: string;
};

const LoadMovie: FC<LoadMovieProps> = ({ title }) => {
  const cachedMovies = useAppSelector(selectCachedMovies);
  const dispatch = useAppDispatch();

  return (
    <Button
      startIcon={cachedMovies[title] ? <FileDownloadDoneIcon /> : <FileDownloadIcon />}
      onClick={() => (cachedMovies[title] ? dispatch(setMovies(cachedMovies[title])) : dispatch(fetchMovies(title)))}
      key={title}
    >
      {title}
    </Button>
  );
};

export default LoadMovie;
