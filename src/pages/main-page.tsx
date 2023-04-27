import * as React from 'react';
import styled from "styled-components";
import {Footer, Header, Main, ThreeSignsForm, FiveSignsForm} from "widgets/index";

const StyledContainer = styled.div`
  @media (max-width: 1024px) {
    min-width: 310px;
    max-width: 490px;
    height: 100%;

    padding: 15px 35px 15px 35px;
    margin: 0 auto;
  }

  @media (min-width: 1025px) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 750px;
    height: fit-content;
  }
  
`

export const MainPage = () => {
    return (
        <StyledContainer>
            <Header/>
            <Main>
                {/*<ThreeSignsForm/>*/}
                <FiveSignsForm/>
            </Main>
            <Footer/>
        </StyledContainer>
    );
};
