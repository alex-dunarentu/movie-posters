import { FC } from 'react';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { SortOption, OrderOption, SortOptionType, OrderOptionType } from '../../types/sort';

type SortGalleryProps = SortOption & OrderOption;

const SortGallery: FC<SortGalleryProps> = ({ sortOption, setSortOption, orderOption, setOrderOption }) => {
  const handleSortOptionChange = (event: SelectChangeEvent) => {
    setSortOption(event.target.value as SortOptionType);

    if (!orderOption) {
      setOrderOption('Ascending');
    }
  };

  const handleOrderOptionChange = (event: SelectChangeEvent) => {
    setOrderOption(event.target.value as OrderOptionType);
  };

  return (
    <Box sx={{ maxWidth: 200, margin: '50px auto 0' }}>
      <FormControl fullWidth sx={{ marginBottom: '25px' }}>
        <InputLabel>Sort by</InputLabel>
        <Select
          labelId="sort-option-dropdown"
          id="sort-option-dropdown"
          value={sortOption}
          label="Sort by"
          onChange={handleSortOptionChange}
          data-testid="sort-option-dropdown"
        >
          <MenuItem value={'Title'}>Name</MenuItem>
          <MenuItem value={'Year'}>Release date</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth disabled={!sortOption}>
        <InputLabel>Order</InputLabel>
        <Select
          labelId="order-option-dropdown"
          id="order-option-dropdown"
          value={orderOption}
          label="Order"
          onChange={handleOrderOptionChange}
          data-testid="order-option-dropdown"
        >
          <MenuItem value={'Ascending'}>Ascending</MenuItem>
          <MenuItem value={'Descending'}>Descending</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default SortGallery;
