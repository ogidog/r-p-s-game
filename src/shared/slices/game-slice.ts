import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../store/store";
import {SignType} from "app/types";

export interface IGameState {
    isBonusGame: boolean;
    selectedSign: SignType | "";
}

const initialState: IGameState = {
    isBonusGame: false,
    selectedSign: "",
}

const gameSlice = createSlice({
    name: "game",
    initialState: initialState,
    reducers: {
        setBonusGame: (state) => {
            state.isBonusGame = !state.isBonusGame;
        },
        selectSign: (state, action: PayloadAction<IGameState["selectedSign"]>) => {
            state.selectedSign = action.payload;
        }
    }
});

export const selectBonusGame = (state: RootState): IGameState["isBonusGame"] => state.game.isBonusGame;

export const {setBonusGame, selectSign} = gameSlice.actions;
export default gameSlice.reducer;
