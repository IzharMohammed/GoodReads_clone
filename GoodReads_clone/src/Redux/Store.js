import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "./Slice/AuthSlice";
import bookSliceReducer from "./Slice/BookSlice";

export const store = configureStore(
    {
        reducer: {
            auth: authSliceReducer,
            books : bookSliceReducer
        },
        devTools: true,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
}
)

