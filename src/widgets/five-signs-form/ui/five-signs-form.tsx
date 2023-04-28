import * as React from 'react';
import styled from "styled-components";
import {HandSign} from "entities/index";
import BgPentagon from "../assets/images/bg-pentagon.svg";

const StyledContainer = styled.div`
  position: relative;

  width: 71%;
  aspect-ratio: 1 / 1;

  background-image: url(${BgPentagon});
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
`

const SignContainer = styled.div<{ style?: { [key: string]: string } }>`
  position: absolute;
  width: 100%;
  height: 100%;
`

type Props = {};
export const FiveSignsForm = (props: Props) => {
    return (
        <StyledContainer>
            <SignContainer style={{transform: "rotate(-28deg)"}}>
                <HandSign sign={"rock"} style={{transform: "rotate(28deg)", left: "-10%"}}/>
            </SignContainer>
            <SignContainer style={{transform: "rotate(45deg)"}} >
                <HandSign sign={"paper"} style={{transform: "rotate(-38deg)"}}/>
            </SignContainer>
            <SignContainer style={{transform: "rotate(118deg)"}}>
                <HandSign sign={"scissors"} style={{transform: "rotate(-118deg)", top: "-10%"}}/>
            </SignContainer>
            <SignContainer style={{transform: "rotate(196deg)"}}>
                <HandSign sign={"lizard"} style={{transform: "rotate(158deg)", top: "-5%", left: "-10%"}}/>
            </SignContainer>
            <SignContainer style={{transform: "rotate(-106deg)"}}>
                <HandSign sign={"spock"} style={{transform: "rotate(106deg)", top: "-10%", left: "-5%"}}/>
            </SignContainer>
        </StyledContainer>
    );
};
