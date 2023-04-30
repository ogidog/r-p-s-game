import * as React from 'react';
import styled from "styled-components";
import {HandSign} from "entities/index";
import BgPentagon from "../assets/images/bg-pentagon.svg";

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

  height: 76%;
  width: 76%;

  background-image: url(${BgPentagon});
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
`

export const FiveSignsForm = () => {
    return (
        <StyledContainer>
            <SignContainer>
                <HandSign sign={"rock"} style={{left: "-14%", top: "15%"}}/>
                <HandSign sign={"paper"} style={{left: "28%", top: "-14%"}}/>
                <HandSign sign={"scissors"} style={{left: "70%", top: "15%"}}/>
                <HandSign sign={"lizard"} style={{left: "0%", top: "70%"}}/>
                <HandSign sign={"spock"} style={{left: "60%", top: "70%"}}/>
            </SignContainer>
        </StyledContainer>
    );
};
