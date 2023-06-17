import {createSlice, PayloadAction} from '@reduxjs/toolkit';
// import {user} from "entity/user";

export interface mainPageState {
    // user?: user[];
    pageIsLoading: boolean;
}

const initialState: mainPageState = {
    pageIsLoading: true,
}

export const mainPageSlice = createSlice({
    name: 'mainPage',
    initialState,
    reducers: {
        // setUsers: (state, action: PayloadAction<user[]>) => {
        //     state.user = action.payload;
        //     state.pageIsLoading = false;
        // },
        setPageIsLoading: (state) => {
            state.pageIsLoading = true;
        }
    }
})

export const {actions: mainPageActions} = mainPageSlice;
export const {reducer: mainPageReducer} = mainPageSlice