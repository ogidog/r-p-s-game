import * as React from 'react';
import styled from "styled-components";
import {HandSign} from "entities/index";
import BgTriangle from "../assets/images/bg-triangle.svg";

const StyledContainer = styled.div`
  position: relative;

  display: grid;
  justify-items: center;
  align-items: center;

  width: 100%;
  max-width: 520px;
  max-height: 520px;
  aspect-ratio: 1 / 1;

  align-self: center;

  border: 1px solid red;
`

const SignContainer = styled.div`
  position: relative;

  height: 81%;
  width: 81%;

  background-image: url(${BgTriangle});
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
`

export const ThreeSignsForm = () => {
    return (
        <StyledContainer>
            <SignContainer>
                <HandSign sign={"rock"} style={{left: "-10%", top: "-10%"}}/>
                <HandSign sign={"paper"} style={{left: "68%", top: "-10%"}}/>
                <HandSign sign={"scissors"} style={{left: "30%", top: "57%"}}/>
            </SignContainer>
        </StyledContainer>
    );
};
