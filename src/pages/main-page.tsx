import * as React from 'react';
import styled from "styled-components";
import {Footer, Header, Main, ThreeSignsForm, FiveSignsForm} from "widgets/index";
import {useSelector} from "react-redux";
import {selectBonusGame} from "shared/slices/game-slice";

const StyledContainer = styled.div`

  display: grid;
  grid-row-gap: 50px;
  grid-template-rows: fit-content(5px) 1fr fit-content(5px);

  min-width: 355px;
  max-width: 750px;
  min-height: 640px;

  @media (max-width: 1024px) {
    height: 100vh;
    box-sizing: border-box;

    padding: 15px 15px 15px 15px;
    margin: 0 auto;
  }

  @media (min-width: 1025px) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 100%;
    height: fit-content;
  }

`

export const MainPage = () => {
    const isBonusGame = useSelector(selectBonusGame)
    return (
        <StyledContainer>
            <Header/>
            <Main>
                {isBonusGame ? <FiveSignsForm/> : <ThreeSignsForm/>}
            </Main>
            <Footer/>
        </StyledContainer>
    );
};
