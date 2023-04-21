import * as React from 'react';
import styled from "styled-components";

const StyledContainer = styled.div`
  width: 100%;
  height: 70px;
  
  flex-basis: 70px;
  flex-shrink: 0;
  border: 1px solid lightskyblue;
`

type Props = {};
export const Footer = (props: Props) => {
    return (
        <StyledContainer>
            Footer
        </StyledContainer>
    );
};
