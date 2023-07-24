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

  const handleClick = (title: string) => () => {
    if (cachedMovies[title]) {
      dispatch(setMovies(cachedMovies[title]));
    } else {
      dispatch(fetchMovies(title));
    }
  };

  return (
    <Button
      startIcon={cachedMovies[title] ? <FileDownloadDoneIcon /> : <FileDownloadIcon />}
      onClick={handleClick(title)}
      key={title}
    >
      {title}
    </Button>
  );
};

export default LoadMovie;
