import { useState, FC } from 'react';

import { useAppSelector } from './store/hooks';
import { selectLoading } from './store/movies/movies.selector';

import { useMediaQuery } from '@mui/material';
import Typography from '@mui/material/Typography';
import ButtonGroup from '@mui/material/ButtonGroup';

import { SortOptionType, OrderOptionType } from './types/sort';

import Gallery from './components/gallery/gallery.component';
import LoaderComponent from './components/loader/loader.component';
import LoadMovie from './components/load-movie/load-movie.component';

const MOVIE_TITLES = ['Matrix', 'Matrix Reloaded', 'Matrix Revolutions'];

const App: FC = () => {
  const loading = useAppSelector(selectLoading);

  const [sortOption, setSortOption] = useState<SortOptionType>('');
  const [orderOption, setOrderOption] = useState<OrderOptionType>('');

  return (
    <div className="App">
      <Typography variant="h2" style={{ textAlign: 'center', padding: '20px' }}>
        Movie Posters
      </Typography>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <ButtonGroup
          orientation={useMediaQuery('(max-width:570px)') ? 'vertical' : 'horizontal'}
          variant="contained"
          aria-label="outlined primary button group"
        >
          {MOVIE_TITLES.map((title) => (
            <LoadMovie key={title} title={title} />
          ))}
        </ButtonGroup>
      </div>

      {loading ? (
        <LoaderComponent />
      ) : (
        <Gallery
          sortOption={sortOption}
          setSortOption={setSortOption}
          orderOption={orderOption}
          setOrderOption={setOrderOption}
        />
      )}
    </div>
  );
};

export default App;
