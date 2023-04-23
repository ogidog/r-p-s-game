import * as React from 'react';
import styled from "styled-components";

const StyledContainer = styled.div`
  @media()
  width: 100%;
  height: fit-content;
  
  flex-basis: 70px;
  flex-shrink: 0;
  //border: 1px solid lightskyblue;
`

type Props = {};
export const Footer = (props: Props) => {
    return (
        <StyledContainer>

        </StyledContainer>
    );
};
