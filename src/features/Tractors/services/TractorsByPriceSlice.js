/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AxiosInstance from '../../../lib/AxiosInstance';

const initialState = {
  status: null,
  loading: false,
  data: [],
  error: '',
};

export const FetchTractorsByPrice = createAsyncThunk('tractorsbyprice', async (range, { rejectWithValue }) => {
  try {
    const res = await AxiosInstance({ url: 'api/v1/tractors_by_price', params: range });
    return res.data.data;
  } catch (error) {
    rejectWithValue(error);
  }
  return rejectWithValue('Something went wrong!.');
});

const TractorsByPriceSlice = createSlice({
  name: 'tractorsbyprice',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(FetchTractorsByPrice.pending, (state) => {
      state.status = 'pending'; state.loading = true; state.data = []; state.error = '';
    });
    builder.addCase(FetchTractorsByPrice.fulfilled, (state, action) => {
      state.status = action.payload.length > 0 ? 'ok-exist' : 'ok-empty';
      state.loading = false; state.data = action.payload; state.error = '';
    });
    builder.addCase(FetchTractorsByPrice.rejected, (state, action) => {
      state.status = 'error'; state.loading = false; state.data = []; state.error = action.error;
    });
  },
});

export default TractorsByPriceSlice.reducer;
