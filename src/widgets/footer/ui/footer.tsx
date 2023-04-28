import * as React from 'react';
import styled from "styled-components";
import {ControlButton} from "entities/index";

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  justify-items: stretch;
  
  width: 100%;
  height: fit-content;
  
`

type Props = {};
export const Footer = (props: Props) => {
    return (
        <StyledContainer>
            <ControlButton text={"bonus"} style={{justifySelf:"self-start"}}/>
            <ControlButton text={"rules"} style={{justifySelf:"self-end"}}/>
        </StyledContainer>
    );
};
