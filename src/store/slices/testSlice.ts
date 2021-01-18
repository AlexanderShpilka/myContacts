import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TestState {
  testValue: string;
}

const initialState: TestState = {
  testValue: 'test',
};

const testSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {
    setTestValue(state, action: PayloadAction<string>) {
      state.testValue = action.payload;
    },
  },
});

export const { setTestValue } = testSlice.actions;

export default testSlice.reducer;
