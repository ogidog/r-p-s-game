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

const SignContainer = styled.div<{ rotate: string }>`
  position: absolute;
  width: 100%;
  height: 100%;
  transform: rotate(${props => props.rotate});
`

export const ThreeSignsForm = () => {
    const onClickHandSignHandler = ()=>{

    }

    return (
        <StyledContainer>
            <SignContainer rotate={"0deg"}>
                <HandSign sign={"rock"} style={{left:"-10%", top:"-10%"}}/>
            </SignContainer>
            <SignContainer rotate={"90deg"}>
                <HandSign sign={"paper"} style={{transform:"rotate(-90deg)", left:"-10%", top:"-10%"}}/>
            </SignContainer>
            <SignContainer rotate={"225deg"}>
                <HandSign sign={"scissors"} style={{transform:"rotate(130deg)", left:"10%", top:"10%"}} />
            </SignContainer>
        </StyledContainer>
    );
};
