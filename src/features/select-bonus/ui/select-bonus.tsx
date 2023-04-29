import * as React from 'react';
import {useDispatch} from "react-redux";
import {setBonusGame} from "shared/slices/game-slice";
import {ButtonA} from "shared/ui/ButtonA";

export const SelectBonus = () => {
    const dispatch = useDispatch()

    const bonusClickHandler = () => {
        dispatch(setBonusGame())
    }

    return (
        <ButtonA text={"bonus".toUpperCase()} style={{justifySelf: "self-start"}} events={{"onClick": bonusClickHandler}}/>
    );
};
