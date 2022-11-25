/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { GetUser } from '../../../hooks/useLocalStorage';
import AxiosInstance from '../../../lib/AxiosInstance';
import { ToastifyFunc } from '../../../lib/ToastifyLoaders';

const initialState = {
  status: null,
  loading: false,
  data: null,
  error: '',
};

export const CreateRent = createAsyncThunk('newrent', async (formData, { rejectWithValue }) => {
  const { token } = GetUser();
  ToastifyFunc('pending', 'Wait for creating rent...');
  try {
    const res = await AxiosInstance({
      url: 'api/v1/rents', method: 'POST', headers: { Authorization: token }, data: formData,
    });
    ToastifyFunc('ok', 'Rent created successfully!');
    return res.data.data;
  } catch (error) {
    ToastifyFunc('error');
    rejectWithValue(error);
  }
  return rejectWithValue('Something went wrong!.');
});

const NewRentSlice = createSlice({
  name: 'newrent',
  initialState,
  reducers: { ResetNewRent: () => initialState },
  extraReducers: (builder) => {
    builder.addCase(CreateRent.pending, (state) => {
      state.status = 'pending'; state.loading = true; state.data = null; state.error = '';
    });
    builder.addCase(CreateRent.fulfilled, (state, action) => {
      state.status = 'ok'; state.loading = false; state.data = action.payload; state.error = '';
    });
    builder.addCase(CreateRent.rejected, (state, action) => {
      state.status = 'error'; state.loading = false; state.data = null; state.error = action.error;
    });
  },
});

export const { ResetNewRent } = NewRentSlice.actions;
export default NewRentSlice.reducer;
