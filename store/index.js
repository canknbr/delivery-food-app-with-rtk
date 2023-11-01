import { configureStore } from "@reduxjs/toolkit";
import basketSlice from "../src/slices/basketSlice";
import restaurantSlice from "../src/slices/restaurantSlice";

const store = configureStore({
  reducer: {
    basket: basketSlice,
    restaurant: restaurantSlice,
  },
});
export default store;
