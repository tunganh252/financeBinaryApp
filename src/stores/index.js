import { configureStore } from "@reduxjs/toolkit"
import middlewares from "./middlewares";


import reducers from "./reducers";
export const store = configureStore({
    devTools: process.env.NODE_ENV !== 'production',
    reducer: reducers,
    middleware: middlewares,
});