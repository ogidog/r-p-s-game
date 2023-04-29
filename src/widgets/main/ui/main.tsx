import * as React from 'react';
import {FC, ReactNode} from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  position: relative;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  
  @media (min-width: 1025px) {
    height: 700px;
  }

  @media (max-width: 1024px) {
    width: 100%;
  }
`

type Props = {
    children: ReactNode | ReactNode[]
};
export const Main: FC<Props> = ({children}) => {
    return (
        <StyledContainer>
            {children}
        </StyledContainer>
    );
};
