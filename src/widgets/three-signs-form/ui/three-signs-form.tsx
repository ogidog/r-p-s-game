import * as React from 'react';
import styled from "styled-components";
import {HandSign} from "entities/index";
import BgTriangle from "../assets/images/bg-triangle.svg";

const StyledContainer = styled.div`
  position: relative;

  width: 71%;
  aspect-ratio: 1 / 1;

  background-image: url(${BgTriangle});
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
`

export const ThreeSignsForm = () => {
    return (
        <StyledContainer>
            <HandSign sign={"rock"} style={{left: "-10%", top: "-10%"}} />
            <HandSign sign={"paper"} style={{left: "69%", top: "-10%"}}/>
            <HandSign sign={"scissors"} style={{left: "30%", top: "50%"}}/>
        </StyledContainer>
    );
};
