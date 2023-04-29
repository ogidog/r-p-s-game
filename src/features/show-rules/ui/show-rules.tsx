
import * as React from 'react';
import {ButtonA} from "shared/ui/ButtonA";

export const ShowRules = () => {
    return (
        <ButtonA text={"rules".toUpperCase()} style={{justifySelf: "self-end"}} events={{"onClick": null}}/>
    );
};
