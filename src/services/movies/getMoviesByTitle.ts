import axios from '../axios';

import { Movie } from '../../types/movie';

const getMoviesByTitle = async (title: string): Promise<Movie[]> => {
  try {
    const response = await axios.get(`?s=${encodeURIComponent(title)}&apikey=${process.env.REACT_APP_API_KEY}`);
    return response.data.Search || [];
  } catch (error) {
    console.error('Error fetching movies:', error);
    return [];
  }
};

export default getMoviesByTitle;
