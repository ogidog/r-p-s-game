import * as React from 'react';
import {FC, ReactNode} from "react";
import styled from "styled-components";
import BgPentagon from "widgets/five-signs-form/assets/images/bg-pentagon.svg";

const StyledContainer = styled.div`
  position: relative;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  //padding: 50px 25px 55px 25px;
  //box-sizing: border-box;

  @media (min-width: 1025px) {
    width: 100%;
    height: 700px;
  }

  @media (max-width: 1024px) {
    width: 100%;
    // height: 100%;
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
