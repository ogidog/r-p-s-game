import * as React from 'react';
import styled from "styled-components";
import {Footer, Header, SelectThreeSignForm} from "widgets/index";

const StyledContainer = styled.div`

  @media (max-width: 768px) {
    width: 100%;
    height: 100vh;
    
    max-width: 480px;
    max-height: 800px;
  }

  @media (min-width: 769px) {
    width: 769px;
    height: 750px;
  }

  display: flex;
  flex-direction: column;
 
`

export const MainPage = () => {
    return (
        <StyledContainer>
            <Header/>
            <SelectThreeSignForm/>
            <Footer/>
        </StyledContainer>
    );
};
