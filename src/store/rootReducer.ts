import { combineReducers } from '@reduxjs/toolkit';

import testReducer from 'store/slices/testSlice';

const rootReducer = combineReducers({
  test: testReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
