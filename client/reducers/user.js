import { createAction, createSlice, isAnyOf } from '@reduxjs/toolkit';

const name = 'user';

const initialState = {
  user: null,
  error: null,
};

export const loginRequest = createAction(`${name}/loginRequest`);
export const loginSuccess = createAction(`${name}/loginSuccess`);

export const loadUserRequest = createAction(`${name}/loadUserRequest`);
export const loadUserSuccess = createAction(`${name}/loadUserSuccess`);

export const logoutRequest = createAction(`${name}/logoutRequest`);
export const logoutSuccess = createAction(`${name}/logoutSuccess`);

const userSlice = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(
        isAnyOf(
          loginRequest,
          loadUserRequest,
          logoutSuccess,
        ),
        (state) => {
          state.user = null;
          state.error = null;
        },
      )
      .addMatcher(
        isAnyOf(
          loginSuccess,
          loadUserSuccess,
        ),
        (state, action) => {
          state.user = action.payload;
        },
      );
  },
});

export default userSlice.reducer;
