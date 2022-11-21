import { configureStore } from '@reduxjs/toolkit';
import { AllTractorsSlice, PopularTractorsSlice, TractorSlice } from '../features/Tractors/services';

const store = configureStore({
  reducer: {
    alltractors: AllTractorsSlice,
    populartractors: PopularTractorsSlice,
    tractor: TractorSlice,
  },

});

export default store;
