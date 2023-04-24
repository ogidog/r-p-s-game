import * as React from 'react';
import styled from "styled-components";
import {RulesButton} from "entities/index";

const StyledContainer = styled.div`
  @media (min-width: 1025px) {
    display: flex;
    justify-content: flex-end;

    width: 100%;
    height: fit-content;
  }
  
  @media(max-width: 1024px){
    
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
