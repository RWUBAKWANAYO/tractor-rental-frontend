import { configureStore } from '@reduxjs/toolkit';
import { AllTractorsSlice, TractorSlice } from '../features/Tractors/services';

const store = configureStore({
  reducer: {
    alltractors: AllTractorsSlice,
    tractor: TractorSlice,
  },

});

export default store;
