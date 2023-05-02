import * as React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {selectBonusGame, selectSelectedSign, setBonusGame} from "shared/slices/game-slice";
import {ButtonA} from "shared/ui/ButtonA";

export const SelectBonus = () => {
    const dispatch = useDispatch();
    const selectedSign = useSelector(selectSelectedSign);
    const isBonusGame = useSelector(selectBonusGame);

    const bonusClickHandler = () => {
        dispatch(setBonusGame())
    }

    return (
        <ButtonA text={"bonus".toUpperCase()}
                 style={{justifySelf: "self-start", visibility: selectedSign ? "hidden" : "visible"}}
                 events={{"onClick": bonusClickHandler}}
                 invert={isBonusGame}
        />
    );
};
