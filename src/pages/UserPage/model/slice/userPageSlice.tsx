import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {user} from "entity/user";

export interface petPageState {
    user?: user[];
    pageIsLoading: boolean;
}

const initialState: petPageState = {
    pageIsLoading: true,
}

export const userPageSlice = createSlice({
    name: 'userPage',
    initialState,
    reducers: {
        setUsers: (state, action: PayloadAction<user[]>) => {
            state.user = action.payload;
            state.pageIsLoading = false;
        },
        setPageIsLoading: (state) => {
            state.pageIsLoading = true;
        }
    }
})

export const {actions: userPageActions} = userPageSlice;
export const {reducer: userPageReducer} = userPageSlice;

