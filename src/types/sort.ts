import { Dispatch, SetStateAction } from 'react';

export type SortOptionType = '' | 'Year' | 'Title';

export type SortOption = {
  sortOption: SortOptionType;
  setSortOption: Dispatch<SetStateAction<SortOptionType>>;
};
export type OrderOptionType = '' | 'Ascending' | 'Descending';

export type OrderOption = {
  orderOption: OrderOptionType;
  setOrderOption: Dispatch<SetStateAction<OrderOptionType>>;
};
