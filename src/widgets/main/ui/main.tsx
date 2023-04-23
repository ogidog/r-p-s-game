import * as React from 'react';
import {FC, ReactNode} from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  @media(min-width: 1025px){
    display: flex;
    justify-content: center;
    align-items: center;
    
    width: 100%;
    height: 600px;
  }
  
  padding: 20px 15px 20px 15px;
  box-sizing: border-box;
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
