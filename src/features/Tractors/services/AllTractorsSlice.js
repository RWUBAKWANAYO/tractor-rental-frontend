/* eslint-disable no-param-reassign */
/* eslint-disable consistent-return */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AxiosInstance from '../../../lib/AxiosInstance';

const initialState = {
  status: null,
  loading: false,
  data: [],
  error: '',
};

export const FetchAllTractors = createAsyncThunk('alltractors', async (_, { rejectWithValue }) => {
  try {
    const res = await AxiosInstance({ url: 'api/v1/tractors' });
    return res.data.data;
  } catch (error) {
    rejectWithValue(error);
  }
});

const AllTractorsSlice = createSlice({
  name: 'alltractors',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(FetchAllTractors.pending, (state) => {
      state.status = 'pending'; state.loading = true; state.data = []; state.error = '';
    });
    builder.addCase(FetchAllTractors.fulfilled, (state, action) => {
      state.status = action.payload.length > 0 ? 'ok-exist' : 'ok-empty';
      state.loading = false; state.data = action.payload; state.error = '';
    });
    builder.addCase(FetchAllTractors.rejected, (state, action) => {
      state.status = 'error'; state.loading = false; state.data = []; state.error = action.error;
    });
  },
});

export default AllTractorsSlice.reducer;
