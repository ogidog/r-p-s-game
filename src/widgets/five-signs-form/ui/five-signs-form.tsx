import * as React from 'react';
import styled from "styled-components";
import {HandSign} from "entities/index";
import BgPentagon from "../assets/images/bg-pentagon.svg";

const StyledContainer = styled.div`
  
  position: relative;
  
  width: 378px;
  height: 378px;
  
  background-image: url(${BgPentagon});
  background-position: center;
  background-repeat: no-repeat;

  //border: 1px solid red;
`


type Props = {};
export const FiveSignsForm = (props: Props) => {
    return (
        <StyledContainer>
            <HandSign sign={"paper"} x={"-45px"} y={"70px"} width={"135px"} height={"135px"}/>
            <HandSign sign={"rock"} x={"250px"} y={"70px"} width={"165px"} height={"165px"}/>
            <HandSign sign={"scissors"} x={"105px"} y={"-30px"} width={"165px"} height={"165px"}/>
            <HandSign sign={"spock"} x={"195px"} y={"270px"} width={"165px"} height={"165px"}/>
            <HandSign sign={"lizard"} x={"-5px"} y={"270px"} width={"165px"} height={"165px"}/>
        </StyledContainer>
    );
};
