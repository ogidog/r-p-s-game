import * as React from 'react';
import styled from "styled-components";
import IconScissors from "../assets/images/icon-scissors.svg";
import IconLizard from "../assets/images/icon-lizard.svg";
import IconPaper from "../assets/images/icon-paper.svg";
import IconRock from "../assets/images/icon-rock.svg";
import IconSpock from "../assets/images/icon-spock.svg";

type HandSignType = "lizard" | "paper" | "rock" | "scissors" | "spock";

type Props = {
    sign: HandSignType;
    top?: string;
    left?: string;
    rotate?: string;
    style: { [key: string]: string }
};

const icons: { [key in HandSignType]: any } = {
    scissors: IconScissors,
    lizard: IconLizard,
    paper: IconPaper,
    rock: IconRock,
    spock: IconSpock,
};


const StyledContainer = styled.div<Props>`

  width: 43%;
  height: 43%;

  border-width: 15px;

  position: absolute;
  
  border-radius: 50%;
  border-style: solid;
  border-color: ${props => `var(--${props.sign}-border-color)`};
  box-sizing: border-box;

  background-color: white;
  background-image: ${props => `url(${icons[props.sign]})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: 45%, 45%;

  box-shadow: inset 0px 6px lightgray, 0px 6px ${props => `var(--${props.sign}-shadow-color)`};
`

export const HandSign = (props: Props) => {
    return (
        <StyledContainer {...props}/>
    );
};
