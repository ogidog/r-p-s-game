import * as React from 'react';
import styled from "styled-components";
import {HandSign} from "entities/index";
import BgTrinagle from "../assets/images/bg-triangle.svg";

const StyledContainer = styled.div`
  
  margin: 0 auto;
  
  width: 378px;
  height: 378px;
  
  background-image: url(${BgTrinagle});
  background-position: center;
  background-repeat: no-repeat;

  //border: 1px solid red;
`


type Props = {};
export const ThreeSignsForm = (props: Props) => {
    return (
        <StyledContainer>
            {/*<HandSign sign={"paper"} x={"-20px"} y={"-20px"} size={"small"}/>*/}
            {/*<HandSign sign={"rock"} x={"250px"} y={"-20px"} size={"small"}/>*/}
            {/*<HandSign sign={"scissors"} x={"105px"} y={"210px"} size={"small"}/>*/}
        </StyledContainer>
    );
};
