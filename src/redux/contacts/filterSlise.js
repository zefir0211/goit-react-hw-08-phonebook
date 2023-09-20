import { createSlice } from '@reduxjs/toolkit';

const filterSlise = createSlice({
    name: "filters",
    initialState: {
        filter:'',
    },
    reducers: {
        filterValue(state, action) {
            state.filter = action.payload;
        },
    }
});
export const { filterValue } = filterSlise.actions;
export const filtersReducer = filterSlise.reducer;