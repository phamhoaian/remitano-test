import { useSelector } from 'react-redux'

export const useGetUser = () => {
  return useSelector((state) => state.auth.user);
};