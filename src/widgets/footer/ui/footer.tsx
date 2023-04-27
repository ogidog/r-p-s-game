import * as React from 'react';
import styled from "styled-components";
import {RulesButton} from "entities/index";

const StyledContainer = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  
  @media (min-width: 1025px) {
    justify-content: flex-end;
  }
  
  @media(max-width: 1024px){
    justify-content: center;
  }
`

type Props = {};
export const Footer = (props: Props) => {
    return (
        <StyledContainer>
            <RulesButton/>
        </StyledContainer>
    );
};
