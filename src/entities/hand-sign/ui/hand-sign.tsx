import * as React from 'react';
import styled from "styled-components";
import IconScissors from "../assets/icon-scissors.svg";
import IconLizard from "../assets/icon-lizard.svg";
import IconPaper from "../assets/icon-paper.svg";
import IconRock from "../assets/icon-rock.svg";
import IconSpock from "../assets/icon-spock.svg";


type HandSign = "lizard" | "paper" | "rock" | "scissors" | "spock";

const StyledContainer = styled.div<{ sign: HandSign }>`
  max-width: 95px;
  min-height: 95px;

  border-radius: 50%;
  border: ${props => `15px solid var(--${props.sign}-border-color)`};

  background-color: white;
  background-image: url(${IconSpock});
  background-position: center;
  background-repeat: no-repeat;

  box-shadow: inset 0px 6px lightgray, 0px 6px ${props => `var(--${props.sign}-shadow-color)`};

`

type Props = {};

export const HandSign = (props: Props) => {
    return (
        <StyledContainer sign={"spock"}>

        </StyledContainer>
    );
};
