import * as React from 'react';
import styled from "styled-components";
import {SignType} from "app/types/index"
import {SIGN_ICONS} from "app/const";
import {FC} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectSelectedSign, selectSign} from "shared/slices/game-slice";

const StyledContainer = styled.div<Props>`
  position: absolute;

  width: 43%;
  height: 43%;

  border-width: 15px;
  border-radius: 50%;
  border-style: solid;
  border-color: ${props => `var(--${props.sign}-border-color)`};
  box-sizing: border-box;

  background-color: white;
  background-image: ${props => `url(${SIGN_ICONS[props.sign]})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: 45%, 45%;

  box-shadow: inset 0px 6px lightgray, 0px 6px ${props => `var(--${props.sign}-shadow-color)`};

  cursor: pointer;

`

type Props = {
    sign: SignType;
    disabled?: boolean;
    style?: { [key: string]: string | number };
    events?: any;
};

export const HandSign: FC<Props> = ({disabled = false, ...props}) => {
    const dispatch = useDispatch();

    const clickHandler = () => {
        if (!disabled) dispatch(selectSign(props.sign));
    }

    return (
        <StyledContainer sign={props.sign} style={props.style} {...props.events} onClick={clickHandler}/>
    );
};
