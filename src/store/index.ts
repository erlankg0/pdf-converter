import {configureStore} from "@reduxjs/toolkit";
import themeReducer from "./../features/theme/slice.ts";

const store = configureStore({
    reducer: {
        theme: themeReducer
    }
})

export default store;
export type RootType = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;