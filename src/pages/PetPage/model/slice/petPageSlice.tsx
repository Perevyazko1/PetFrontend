import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {pet} from "entity/pet";

export interface petPageState {
    filterByName?: string;
    orderBy: "date" | "-date";
    pets?: pet[];
    pageIsLoading: boolean;
}

const initialState: petPageState = {
    orderBy: "date",
    pageIsLoading: true,
}

export const petPageSlice = createSlice({
    name: 'petPage',
    initialState,
    reducers: {
        setPets: (state, action: PayloadAction<pet[]>) => {
            state.pets = action.payload;
            state.pageIsLoading = false;
        },
        setPageIsLoading: (state) => {
            state.pageIsLoading = true;
        }
    }
})

export const {actions: petPageActions} = petPageSlice;
export const {reducer: petPageReducer} = petPageSlice;

