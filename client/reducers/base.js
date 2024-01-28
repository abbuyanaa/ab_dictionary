import { createAction, createSlice, isAnyOf } from '@reduxjs/toolkit';

const name = 'base';

const initialState = {
  count: 0,
};

export const incRequest = createAction(`${name}/incRequest`);
export const decRequest = createAction(`${name}/decRequest`);

const userSlice = createSlice({
  name,
  initialState,
  reducers: {
    incSuccess: (state, action) => {
      state.count += 1;
    },
    decSuccess: (state, action) => {
      state.count = state.count > 0 && state.count - 1;
    },
  },
});

export const {
  incSuccess,
  decSuccess,
} = userSlice.actions;

export default userSlice.reducer;
