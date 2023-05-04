import * as React from 'react';
import styled from "styled-components";
import {HandSign} from "entities/index";
import BgTriangle from "../assets/images/bg-triangle.svg";
import {SIGNS} from "app/const";
import {SignType} from "app/types";
import {randomizeArrayItems} from "shared/libs/utils";

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
    const randomizedSigns = randomizeArrayItems(SIGNS.slice(0, -3));

    return (
        <StyledContainer>
            <SignContainer>
                <HandSign sign={randomizedSigns[0]} style={{left: "-10%", top: "-10%"}}/>
                <HandSign sign={randomizedSigns[1]} style={{left: "68%", top: "-10%"}}/>
                <HandSign sign={randomizedSigns[2]} style={{left: "30%", top: "57%"}}/>
            </SignContainer>
        </StyledContainer>
    );
};
