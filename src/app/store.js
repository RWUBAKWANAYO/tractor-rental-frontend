import { configureStore } from '@reduxjs/toolkit';
import { LoginSlice } from '../features/Authentication/services';
import {
  AllTractorsSlice, PopularTractorsSlice, TractorsByNameSlice, TractorsByPriceSlice, TractorSlice,
} from '../features/Tractors/services';

const store = configureStore({
  reducer: {
    login: LoginSlice,
    alltractors: AllTractorsSlice,
    populartractors: PopularTractorsSlice,
    tractorsbyprice: TractorsByPriceSlice,
    tractorsbyname: TractorsByNameSlice,
    tractor: TractorSlice,
  },

});

export default store;
