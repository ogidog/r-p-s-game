import * as React from 'react';
import styled from "styled-components";
import {HandSign} from "entities/index";
import {useSelector} from "react-redux";
import {selectSelectedSign} from "shared/slices/game-slice";
import {SignType} from "app/types";

const StyledContainer = styled.div`
  position: relative;

  width: 100%;
  aspect-ratio: 1 / 1;
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  //display: grid;
  //grid-template-columns: repeat(2, 1fr);
  //justify-items: center;
  //align-items: center;
  //grid-template-rows: 100%;
  //
  //position: relative;
  //
  //width: 71%;
  //aspect-ratio: 1 / 1;
`

type Props = {};
export const ResultForm = (props: Props) => {
    const selectedSign = useSelector(selectSelectedSign) as SignType;
    return (
        <StyledContainer>
            <HandSign sign={selectedSign} style={{position:"relative"}}/>
            <HandSign sign={"rock"} style={{position:"relative"}}/>
        </StyledContainer>
    );
};
