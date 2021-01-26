import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { signOut } from 'store/slices/authSlice';

export const SignOut = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(signOut());
  }, [dispatch]);

  return null;
};
