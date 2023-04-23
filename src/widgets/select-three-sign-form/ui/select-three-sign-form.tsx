import * as React from 'react';
import styled from "styled-components";
import {HandSign} from "entities/index";
import BgTrinagle from "../assets/bg-triangle.svg";

const StyledContainer = styled.div`
  
  position: relative;
  
  width: 378px;
  height: 378px;
  
  border: 1px solid red;
  
  background-image: url(${BgTrinagle});
  background-position: center;
  background-repeat: no-repeat;
  
`


type Props = {};
export const SelectThreeSignForm = (props: Props) => {
    return (
        <StyledContainer>
            <HandSign sign={"paper"} x={-20} y={-20}/>
            <HandSign sign={"rock"} x={250} y={-20}/>
            <HandSign sign={"scissors"}x={105} y={210}/>
        </StyledContainer>
    );
};
