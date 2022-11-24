/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { SaveUser } from '../../../hooks/useLocalStorage';
import AxiosInstance from '../../../lib/AxiosInstance';

const initialState = {
  status: null,
  loading: false,
  user: null,
  error: '',
};

export const CreateUser = createAsyncThunk('signup', async (formData, { rejectWithValue }) => {
  try {
    const res = await AxiosInstance({ url: 'signup', method: 'POST', data: { user: formData } });
    const user = { token: res.headers.authorization, info: res.data.user };
    SaveUser(user);
    return user;
  } catch (error) {
    rejectWithValue(error);
  }
  return rejectWithValue('Something went wrong!.');
});

const SignupSlice = createSlice({
  name: 'signup',
  initialState,
  reducers: { ResetSignup: () => initialState },
  extraReducers: (builder) => {
    builder.addCase(CreateUser.pending, (state) => {
      state.status = 'pending'; state.loading = true; state.user = null; state.error = '';
    });
    builder.addCase(CreateUser.fulfilled, (state, action) => {
      state.status = 'ok'; state.loading = false; state.user = action.payload; state.error = '';
    });
    builder.addCase(CreateUser.rejected, (state, action) => {
      state.status = 'error'; state.loading = false; state.user = null; state.error = action.error;
    });
  },
});

export const { ResetSignup } = SignupSlice.actions;
export default SignupSlice.reducer;
