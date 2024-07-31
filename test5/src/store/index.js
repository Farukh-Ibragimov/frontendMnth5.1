import {configureStore} from "@reduxjs/toolkit";
import registerPageSlice from "./RegisterPageSlice";


export const store = configureStore({
    reducer: {
        register: registerPageSlice
    },
})