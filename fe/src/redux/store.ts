import { configureStore } from "@reduxjs/toolkit";
import mailReducer from "./mailSlice";

const store = configureStore({
    reducer: {
        mail: mailReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store