import * as React from 'react';
import styled from "styled-components";
import {SignType} from "app/types/index"
import {SIGN_ICONS} from "app/const";
import {FC} from "react";
import {useDispatch} from "react-redux";
import {selectSign} from "shared/slices/game-slice";

const StyledContainer = styled.div<Props>`

  position: absolute;

  width: 43%;
  aspect-ratio: 1 / 1;

  border-width: 20px;
  border-radius: 50%;
  border-style: solid;
  border-color: ${props => `var(--${props.sign}-border-color)`};
  box-sizing: border-box;

  background-color: white;
  background-image: ${props => `url(${SIGN_ICONS[props.sign]})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: 45%, 45%;

  box-shadow: ${props => `inset 0px 6px lightgray, 0px 6px var(--${props.sign}-shadow-color) ${props.isWin ? ', 0px 0px 1px 50px rgba(241, 241, 241, 0.05), 0px 0px 1px 100px rgba(241, 241, 241, 0.05), 0px 0px 1px 160px rgba(241, 241, 241, 0.05)' : ''}`};

  cursor: pointer;
`

type Props = {
    sign: SignType;
    disabled?: boolean;
    isWin?: boolean;
    style?: { [key: string]: string | number };
};

export const HandSign: FC<Props> = ({disabled = false, isWin = false, ...props}) => {
    const dispatch = useDispatch();

    const clickHandler = () => {
        if (!disabled) dispatch(selectSign(props.sign));
    }

    return (
        <StyledContainer sign={props.sign} style={props.style} onClick={clickHandler} isWin={isWin}/>
    );
};
