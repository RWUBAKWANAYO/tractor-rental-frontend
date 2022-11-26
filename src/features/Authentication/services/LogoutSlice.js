/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { GetUser, RemoveUser } from '../../../hooks/useLocalStorage';
import AxiosInstance from '../../../lib/AxiosInstance';
import { ToastifyFunc } from '../../../lib/ToastifyLoaders';

const initialState = {
  status: null,
  loading: false,
  user: null,
  error: '',
};

export const LogoutFunc = createAsyncThunk('logout', async (_, { rejectWithValue }) => {
  ToastifyFunc('pending');
  const { token } = GetUser();
  try {
    const res = await AxiosInstance({ url: 'logout', method: 'DELETE', headers: { Authorization: token } });
    ToastifyFunc('ok', res.data.message);
    RemoveUser();
    return res.data.message;
  } catch (error) {
    ToastifyFunc(error.response.message);
    return rejectWithValue(error.response.message);
  }
});

const LogoutSlice = createSlice({
  name: 'logout',
  initialState,
  reducers: { ResetLogout: () => initialState },
  extraReducers: (builder) => {
    builder.addCase(LogoutFunc.pending, (state) => {
      state.status = 'pending'; state.loading = true; state.user = null; state.error = '';
    });
    builder.addCase(LogoutFunc.fulfilled, (state, action) => {
      state.status = 'ok'; state.loading = false; state.user = action.payload; state.error = '';
    });
    builder.addCase(LogoutFunc.rejected, (state, action) => {
      state.status = 'error'; state.loading = false; state.user = null; state.error = action.error;
    });
  },
});

export const { ResetLogout } = LogoutSlice.actions;
export default LogoutSlice.reducer;
