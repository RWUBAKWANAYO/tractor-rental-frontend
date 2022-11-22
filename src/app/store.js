import { configureStore } from '@reduxjs/toolkit';
import {
  AllTractorsSlice, PopularTractorsSlice, TractorsByNameSlice, TractorsByPriceSlice, TractorSlice,
} from '../features/Tractors/services';

const store = configureStore({
  reducer: {
    alltractors: AllTractorsSlice,
    populartractors: PopularTractorsSlice,
    tractorsbyprice: TractorsByPriceSlice,
    tractorsbyname: TractorsByNameSlice,
    tractor: TractorSlice,
  },

});

export default store;
