import * as React from 'react';
import {ButtonA} from "shared/ui/ButtonA";
import {showRules} from "shared/slices/game-slice";
import {useDispatch} from "react-redux";

export const ShowRules = () => {
    const dispatch = useDispatch();

    const clickHandler = () => {
        dispatch(showRules())
    }

    return (
        <ButtonA text={"rules".toUpperCase()} style={{justifySelf: "self-end"}} events={{"onClick": clickHandler}}/>
    );
};
