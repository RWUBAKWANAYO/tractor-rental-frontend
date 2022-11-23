import { configureStore } from '@reduxjs/toolkit';
import { LoginSlice, SignupSlice } from '../features/Authentication/services';
import { UpdateProfileSlice } from '../features/Settings/services';
import {
  AllTractorsSlice,
  PopularTractorsSlice,
  TractorsByNameSlice,
  TractorsByPriceSlice,
  TractorSlice,
} from '../features/Tractors/services';

const store = configureStore({
  reducer: {
    signup: SignupSlice,
    login: LoginSlice,
    updateprofile: UpdateProfileSlice,
    alltractors: AllTractorsSlice,
    populartractors: PopularTractorsSlice,
    tractorsbyprice: TractorsByPriceSlice,
    tractorsbyname: TractorsByNameSlice,
    tractor: TractorSlice,
  },

});

export default store;
