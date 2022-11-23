import { configureStore } from '@reduxjs/toolkit';
import { LoginSlice, SignupSlice } from '../features/Authentication/services';
import { AllRentsSlice, NewRentSlice } from '../features/Rent/services';
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
    allrents: AllRentsSlice,
    newrent: NewRentSlice,
  },

});

export default store;
