import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {news} from "entity/news";

export interface newsPageState {
    news?: news[];
    pageIsLoading: boolean;
}

const initialState:newsPageState = {
    pageIsLoading: true,
}

export const newsPageSlice = createSlice({
    name: 'newsPage',
    initialState,
    reducers: {
        setUsers: (state, action: PayloadAction<news[]>) => {
            state.news = action.payload;
            state.pageIsLoading = false;
        },
        setPageIsLoading: (state) => {
            state.pageIsLoading = true;
        }
    }
})

export const {actions: newsPageActions} = newsPageSlice;
export const {reducer: newsPageReducer} = newsPageSlice;