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

const StyledContainer = styled.div<{ sign: HandSignType }>`
  min-width: 30px;
  min-height: 30px;
  max-width: 115px;
  max-height: 115px;
  width: 100%;
  height: 100%;

  border-radius: 50%;
  border-style: solid;
  border-color: ${props => `var(--${props.sign}-border-color)`};
  border-width: 12px;
  box-sizing: border-box;
  

  background-color: white;
  background-image: ${props => `url(${icons[props.sign]})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: 70% 70%;

  box-shadow: inset 0px 6px lightgray, 0px 6px ${props => `var(--${props.sign}-shadow-color)`};
`

type Props = {
    sign: HandSignType
};

export const HandSign = (props: Props) => {
    return (
        <StyledContainer sign={props.sign} />
    );
};
