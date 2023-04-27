import * as React from 'react';
import styled from "styled-components";
import {HandSign} from "entities/index";
import BgPentagon from "../assets/images/bg-pentagon.svg";

const StyledContainer = styled.div`
  position: relative;

  width: 100%;
  aspect-ratio: 1 / 1;

  background-image: url(${BgPentagon});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`

const SignContainer = styled.div<{ rotate: string }>`
  position: absolute;
  width: 100%;
  height: 100%;
  transform: rotate(${props => props.rotate});
`


type Props = {};
export const FiveSignsForm = (props: Props) => {
    return (
        <StyledContainer>
            <SignContainer rotate={"-19deg"}>
                <HandSign sign={"paper"} x={"83%"} y={"40%"}/>
            </SignContainer>
            <SignContainer rotate={"19deg"}>
                <HandSign sign={"scissors"} x={"-13%"} y={"41%"} rotate={"-20deg"}/>
            </SignContainer>
            <SignContainer rotate={"90deg"}>
                <HandSign sign={"rock"} x={"-7%"} y={"35%"} rotate={"-90deg"}/>
            </SignContainer>
            <SignContainer rotate={"270deg"}>
                <HandSign sign={"spock"} x={"-10%"} y={"7%"} rotate={"88deg"}/>
            </SignContainer>
            <SignContainer rotate={"203deg"}>
                <HandSign sign={"lizard"} x={"-6%"} y={"5%"} rotate={"161deg"}/>
            </SignContainer>
        </StyledContainer>
    );
};
