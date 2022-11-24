/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AxiosInstance from '../../../lib/AxiosInstance';

const initialState = {
  status: null,
  loading: false,
  data: [],
  error: '',
};

export const FetchPopularTractors = createAsyncThunk('populartractors', async (_, { rejectWithValue }) => {
  try {
    const res = await AxiosInstance({ url: 'api/v1/tractors_by_populari' });
    return res.data.data;
  } catch (error) {
    rejectWithValue(error);
  }
  return rejectWithValue('Something went wrong!.');
});

const PopularTractorsSlice = createSlice({
  name: 'populartractors',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(FetchPopularTractors.pending, (state) => {
      state.status = 'pending'; state.loading = true; state.data = []; state.error = '';
    });
    builder.addCase(FetchPopularTractors.fulfilled, (state, action) => {
      state.status = action.payload.length > 0 ? 'ok-exist' : 'ok-empty';
      state.loading = false; state.data = action.payload; state.error = '';
    });
    builder.addCase(FetchPopularTractors.rejected, (state, action) => {
      state.status = 'error'; state.loading = false; state.data = []; state.error = action.error;
    });
  },
});

export default PopularTractorsSlice.reducer;
