import { configureStore } from '@reduxjs/toolkit';
import {petPageReducer} from "pages/PetPage/model/slice/petPageSlice";
import {userPageReducer} from "pages/UserPage/model/slice/userPageSlice";
import {newsPageReducer} from "pages/NewsPage/model/slice/newsPageSlice";
import {mainPageReducer} from "pages/MainPage/model/slice/mainPageSlice";


const store = configureStore({
  reducer: {
    petPage: petPageReducer,
    userPage: userPageReducer,
    newsPage: newsPageReducer,
    mainPage: mainPageReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
