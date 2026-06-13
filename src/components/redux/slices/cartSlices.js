import { createSlice, createSelector } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart1",
    initialState: [],
    reducers: {
        addItem: (state, action) => {
            state.push(action.payload);
        }
    }
});

export const selectCartItems = createSelector(
    (state) => state.cart,
    (state) => (state)
);

export const {  addItem } = cartSlice.actions;
export default cartSlice.reducer;