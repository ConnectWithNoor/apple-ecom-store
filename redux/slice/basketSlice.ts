import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface BasketState {
  items: Product[];
}

const initialState: BasketState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action: PayloadAction<Product>) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action: PayloadAction<{ id: string }>) => {
      const filteredBasket = state.items.filter(
        (item) => item._id !== action.payload.id
      );

      state.items = filteredBasket;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket } = basketSlice.actions;

// selectors
export const selectBasketItems = (state: RootState) => state.basket.items;
export const selectBasketIds = (state: RootState, id: string) => {
  return state.basket.items.filter((item) => item._id === id);
};
export const selectBasketTotal = (state: RootState) => {
  return state.basket.items.reduce((total, item) => {
    return (total += Number(item.price));
  }, 0);
};

export default basketSlice.reducer;
