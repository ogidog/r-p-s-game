import * as React from 'react';
import styled from "styled-components";
import IconScissors from "../assets/images/icon-scissors.svg";
import IconLizard from "../assets/images/icon-lizard.svg";
import IconPaper from "../assets/images/icon-paper.svg";
import IconRock from "../assets/images/icon-rock.svg";
import IconSpock from "../assets/images/icon-spock.svg";


type HandSignType = "lizard" | "paper" | "rock" | "scissors" | "spock";

const icons: { [key in HandSignType]: any } = {
    scissors: IconScissors,
    lizard: IconLizard,
    paper: IconPaper,
    rock: IconRock,
    spock: IconSpock,
};

const StyledContainer = styled.div<{ sign: HandSignType, x: number, y: number }>`
  @media(min-width: 1025px){
    width: 165px;
    height: 165px;
    
    border-width: 20px;

    background-size: 45%, 45%;
  }
  
  position: absolute;
  top: ${props => props.y + 'px'};
  left: ${props => props.x + 'px'};
  
  border-radius: 50%;
  border-style: solid;
  border-color: ${props => `var(--${props.sign}-border-color)`};
  box-sizing: border-box;

  background-color: white;
  background-image: ${props => `url(${icons[props.sign]})`};
  background-position: center;
  background-repeat: no-repeat;

  box-shadow: inset 0px 6px lightgray, 0px 6px ${props => `var(--${props.sign}-shadow-color)`};
`

type Props = {
    sign: HandSignType;
    x: number;
    y: number;
};

export const HandSign = (props: Props) => {
    const {sign, x, y} = props
    return (
        <StyledContainer sign={props.sign} x={x} y={y}/>
    );
};
