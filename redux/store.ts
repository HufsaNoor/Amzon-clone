import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"; // Adjust the path as needed

export const store = configureStore({
  reducer: {
    cart: cartReducer, // Add other reducers as needed
  },
});

// Define RootState as the type of the entire Redux state
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
