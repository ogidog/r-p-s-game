import * as React from 'react';
import styled from "styled-components";
import {Footer, Header, Main, ThreeSignsForm} from "widgets/index";
import {FiveSignsForm} from "../widgets/five-signs-form/ui/five-signs-form";

const StyledContainer = styled.div`
  @media (max-width: 1024px) {
    min-width: 375px;
    max-width: 490px;

    padding: 15px 20px 15px 20px;
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

  //border: 1px solid red;
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
