import {configureStore} from "@reduxjs/toolkit";
import GameSlice from "../slices/game-slice";

export const store = configureStore({
    reducer: {
        "game": GameSlice
    }
});

export type RootState = ReturnType<typeof store.getState>
