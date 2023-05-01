import * as React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {selectSelectedSign, setBonusGame} from "shared/slices/game-slice";
import {ButtonA} from "shared/ui/ButtonA";

export const SelectBonus = () => {
    const dispatch = useDispatch();
    const selectedSign = useSelector(selectSelectedSign);

    const bonusClickHandler = () => {
        dispatch(setBonusGame())
    }

    return (
        <ButtonA text={"bonus".toUpperCase()}
                 style={{justifySelf: "self-start", visibility: selectedSign ? "hidden" : "visible"}}
                 events={{"onClick": bonusClickHandler}}/>
    );
};
