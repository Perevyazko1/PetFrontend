import { configureStore } from '@reduxjs/toolkit';
import {petPageReducer} from "pages/PetPage/model/slice/petPageSlice";


const store = configureStore({
  reducer: {
    petPage: petPageReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;