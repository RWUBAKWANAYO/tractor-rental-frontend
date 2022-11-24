/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AxiosInstance from '../../../lib/AxiosInstance';

const initialState = {
  status: null,
  loading: false,
  data: [],
  error: '',
};

export const FetchTractor = createAsyncThunk('tractor', async (tractorId, { rejectWithValue }) => {
  try {
    const res = await AxiosInstance({ url: `api/v1/tractors/${tractorId}` });
    return res.data.data;
  } catch (error) {
    rejectWithValue(error);
  }
  return rejectWithValue('Something went wrong!.');
});

const TractorSlice = createSlice({
  name: 'tractor',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(FetchTractor.pending, (state) => {
      state.status = 'pending'; state.loading = true; state.data = []; state.error = '';
    });
    builder.addCase(FetchTractor.fulfilled, (state, action) => {
      state.status = 'ok-exist'; state.loading = false; state.data = action.payload; state.error = '';
    });
    builder.addCase(FetchTractor.rejected, (state, action) => {
      state.status = 'error'; state.loading = false; state.data = []; state.error = action.error;
    });
  },
});

export default TractorSlice.reducer;
