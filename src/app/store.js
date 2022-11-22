import { configureStore } from '@reduxjs/toolkit';
import { LoginSlice, SignupSlice } from '../features/Authentication/services';
import {
  AllTractorsSlice, PopularTractorsSlice, TractorsByNameSlice, TractorsByPriceSlice, TractorSlice,
} from '../features/Tractors/services';

const store = configureStore({
  reducer: {
    signup: SignupSlice,
    login: LoginSlice,
    alltractors: AllTractorsSlice,
    populartractors: PopularTractorsSlice,
    tractorsbyprice: TractorsByPriceSlice,
    tractorsbyname: TractorsByNameSlice,
    tractor: TractorSlice,
  },

});

export default store;
