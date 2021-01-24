import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { cleanUp } from 'store/slices/authSlice';

export const useAuthCleanUp = () => {
  const dispatch = useDispatch();

  useEffect(
    () => () => {
      dispatch(cleanUp());
    },
    [dispatch],
  );
};
