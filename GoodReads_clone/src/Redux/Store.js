import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "./Slice/AuthSlice";

console.log("auth slice reducer",authSliceReducer);
export const store = configureStore(
    {
        reducer: {
            auth: authSliceReducer
        },
        devTools: true,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
}
)

