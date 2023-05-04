import * as React from 'react';
import styled from "styled-components";
import {HandSign} from "entities/index";
import BgPentagon from "../assets/images/bg-pentagon.svg";
import {randomizeArrayItems} from "shared/libs/utils";
import {SignType} from "app/types";
import {SIGNS} from "app/const";

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

  height: 76%;
  width: 76%;

  background-image: url(${BgPentagon});
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
`

export const FiveSignsForm = () => {

    const randomizedSigns = randomizeArrayItems(SIGNS.slice(0, -1));

    return (
        <StyledContainer>
            <SignContainer>
                <HandSign sign={randomizedSigns[0]} style={{left: "-14%", top: "15%"}}/>
                <HandSign sign={randomizedSigns[1]} style={{left: "28%", top: "-14%"}}/>
                <HandSign sign={randomizedSigns[2]} style={{left: "70%", top: "15%"}}/>
                <HandSign sign={randomizedSigns[3]} style={{left: "0%", top: "70%"}}/>
                <HandSign sign={randomizedSigns[4]} style={{left: "60%", top: "70%"}}/>
            </SignContainer>
        </StyledContainer>
    );
};
