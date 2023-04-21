import * as React from 'react';
import styled from "styled-components";

const StyledContainer = styled.div`

  display: grid;
  grid-template-rows: fit-content(5px) 1fr;
  grid-row-gap: 0px;
  justify-items: center;

  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom: 10px;

  width: 150px;
  height: 100%;
  box-sizing: border-box;

  background-color: white;

  border-radius: 10px;
`

const Label = styled.div`
  font-weight: 700;
  font-size: 1.1em;
  letter-spacing: 2px;

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
