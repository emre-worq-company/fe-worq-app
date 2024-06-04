

import { configureStore } from '@reduxjs/toolkit'
import common from "@/redux/slices/common";

export const makeStore = () => {
    return configureStore({
        reducer: {
            common,
        },
    })
}