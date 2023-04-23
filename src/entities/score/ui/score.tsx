import * as React from 'react';
import styled from "styled-components";

const StyledContainer = styled.div`

  display: grid;
  grid-template-rows: fit-content(5px) 1fr;
  grid-row-gap: 0px;
  justify-items: center;
  
  padding: 10px 20px 10px 20px;

  width: 100%;
  height: 100%;

  min-width: 65px;
  min-height: 50px;
  max-width: 110px;
  
  box-sizing: border-box;
  background-color: white;
  border-radius: 10px;
  
  font-size: 100%;
`

const Label = styled.div`
  font-weight: 500;
  font-size: 1.0em;
  letter-spacing: 1.5px;

  color: var(--score-text);
`

const ScoreValue = styled.div`
  font-weight: 700;
  font-size: 3.5em;
  color: var(--dark-text);
`

type Props = {};
export const Score = (props: Props) => {
    return (
        <StyledContainer>
            <Label>SCORE</Label>
            <ScoreValue>12</ScoreValue>
        </StyledContainer>
    );
};
