import * as React from 'react';
import styled from "styled-components";
import IconScissors from "../assets/images/icon-scissors.svg";
import IconLizard from "../assets/images/icon-lizard.svg";
import IconPaper from "../assets/images/icon-paper.svg";
import IconRock from "../assets/images/icon-rock.svg";
import IconSpock from "../assets/images/icon-spock.svg";

type Size = "small" | "normal" | "large";

type HandSignType = "lizard" | "paper" | "rock" | "scissors" | "spock";

type Props = {
    sign: HandSignType;
    x: string;
    y: string;
    size: Size;
};

const icons: { [key in HandSignType]: any } = {
    scissors: IconScissors,
    lizard: IconLizard,
    paper: IconPaper,
    rock: IconRock,
    spock: IconSpock,
};

const size: { [key in Size]: string } = {
    "small": "110px",
    "normal": "130px",
    "large": "165px"
}

const StyledContainer = styled.div<Props>`

  @media (min-width: 1025px) {
    width: ${props => props.width};
    height: ${props => props.height};

    border-width: 20px;

    background-size: 45%, 45%;
  }

  position: absolute;
  top: ${props => props.y};
  left: ${props => props.x};

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

export const HandSign = (props: Props) => {
    return (
        <StyledContainer {...props} />
    );
};
