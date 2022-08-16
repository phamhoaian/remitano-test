import { useSelector } from 'react-redux'

export const useGetMovieList = () => {
  return useSelector((state) => state.movie.list);
}

export const useGetMovieStatus = () => {
  return useSelector((state) => state.movie.status);
}