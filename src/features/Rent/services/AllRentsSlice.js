/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { GetUser } from '../../../hooks/useLocalStorage';
import AxiosInstance from '../../../lib/AxiosInstance';

const initialState = {
  status: null,
  loading: false,
  data: [],
  error: '',
};

export const FetchAllRents = createAsyncThunk('allrents', async (_, { rejectWithValue }) => {
  const { token } = GetUser();
  try {
    const res = await AxiosInstance({ url: 'api/v1/rents', headers: { Authorization: token } });
    return res.data.data;
  } catch (error) {
    rejectWithValue(error);
  }
  return rejectWithValue('Something went wrong!.');
});

const AllRentsSlice = createSlice({
  name: 'allrents',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(FetchAllRents.pending, (state) => {
      state.status = 'pending'; state.loading = true; state.data = []; state.error = '';
    });
    builder.addCase(FetchAllRents.fulfilled, (state, action) => {
      state.status = action.payload.length > 0 ? 'ok-exist' : 'ok-empty';
      state.loading = false; state.data = action.payload; state.error = '';
    });
    builder.addCase(FetchAllRents.rejected, (state, action) => {
      state.status = 'error'; state.loading = false; state.data = []; state.error = action.error;
    });
  },
});

export default AllRentsSlice.reducer;
