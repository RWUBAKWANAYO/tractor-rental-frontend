/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { GetUser, SaveUser } from '../../../hooks/useLocalStorage';
import AxiosInstance from '../../../lib/AxiosInstance';

const initialState = {
  status: null,
  loading: false,
  user: null,
  error: '',
};

export const ProfileUpdateFunc = createAsyncThunk('updateprofile', async (formData, { rejectWithValue }) => {
  const { token, info } = GetUser();
  try {
    const res = await AxiosInstance({
      url: `api/v1/users/${info.id}`, method: 'PUT', headers: { Authorization: token }, data: formData,
    });
    const user = { token, info: res.data.user };
    SaveUser(user);
    return user;
  } catch (error) {
    rejectWithValue(error);
  }
  return rejectWithValue('Something went wrong!.');
});

const UpdateProfileSlice = createSlice({
  name: 'updateprofile',
  initialState,
  reducers: { ResetUpdateProfile: () => initialState },
  extraReducers: (builder) => {
    builder.addCase(ProfileUpdateFunc.pending, (state) => {
      state.status = 'pending'; state.loading = true; state.user = null; state.error = '';
    });
    builder.addCase(ProfileUpdateFunc.fulfilled, (state, action) => {
      state.status = 'ok'; state.loading = false; state.user = action.payload; state.error = '';
    });
    builder.addCase(ProfileUpdateFunc.rejected, (state, action) => {
      state.status = 'error'; state.loading = false; state.user = null; state.error = action.error;
    });
  },
});

export const { ResetUpdateProfile } = UpdateProfileSlice.actions;
export default UpdateProfileSlice.reducer;
