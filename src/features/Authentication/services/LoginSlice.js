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

export const FetchUser = createAsyncThunk('login', async (formData, { rejectWithValue }) => {
  try {
    const res = await AxiosInstance({ url: 'login', method: 'POST', data: { user: formData } });
    const user = { token: res.headers.authorization, info: res.data.user };
    SaveUser(user);
    return user;
  } catch (error) {
    rejectWithValue(error);
  }
});

const LoginSlice = createSlice({
  name: 'login',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(FetchUser.pending, (state) => {
      state.status = 'pending'; state.loading = true; state.user = null; state.error = '';
    });
    builder.addCase(FetchUser.fulfilled, (state, action) => {
      state.status = 'ok'; state.loading = false; state.user = action.payload; state.error = [];
    });
    builder.addCase(FetchUser.rejected, (state, action) => {
      state.status = 'error'; state.loading = false; state.user = null; state.error = action.error;
    });
  },
});

export default LoginSlice.reducer;
