import { configureStore } from "@reduxjs/toolkit";
import { taskSlice } from "./taskSlice"; // Ensure correct import path

export const store = configureStore({
    reducer: {
        tasks: taskSlice.reducer, // ✅ Use `.reducer`
    }
});
