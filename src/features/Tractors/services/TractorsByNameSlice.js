/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const TractorsByNameSlice = createSlice({
  name: 'tractorsbyname',
  initialState: {
    status: 'loading',
    data: [],
  },
  reducers: {
    FilterTractorsByName: {
      reducer(state, action) {
        const res = action.payload.tractors.filter((tractor) => (
          tractor.name.toLowerCase().replace(/ +/g, '')
            .match(action.payload.keyword.toLowerCase())
        ));
        state.status = res.length > 0 ? 'ok-exist' : 'ok-empty'; state.data = res;
      },
    },
  },
});

export const { FilterTractorsByName } = TractorsByNameSlice.actions;
export default TractorsByNameSlice.reducer;
