import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../store/store";
import {SignType} from "app/types";

export interface IGameState {
    isBonusGame: boolean;
    selectedSign: SignType | "";
    gameResult: "YOU WIN" | "YOU LOOSE" | "DRAW" | "";
    gameScore: number;
}

const initialState: IGameState = {
    isBonusGame: false,
    selectedSign: "",
    gameResult: "",
    gameScore: localStorage["gameScore"] ? +localStorage["gameScore"] : 0,
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
        },
        setResult: (state, action: PayloadAction<IGameState["gameResult"]>) => {
            state.gameResult = action.payload;
        },
        setScore: (state, action: PayloadAction<IGameState["gameScore"]>) => {
            state.gameScore = action.payload;
        }
    }
});

export const selectBonusGame = (state: RootState): IGameState["isBonusGame"] => state.game.isBonusGame;
export const selectSelectedSign = (state: RootState): IGameState["selectedSign"] => state.game.selectedSign;
export const selectGameResult = (state: RootState): IGameState["gameResult"] => state.game.gameResult;
export const selectGameScore = (state: RootState): IGameState["gameScore"] => state.game.gameScore;

export const {setBonusGame, selectSign, setResult, setScore} = gameSlice.actions;
export default gameSlice.reducer;
