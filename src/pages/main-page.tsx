import * as React from 'react';
import styled from "styled-components";
import {Footer, Header, ThreeSignsForm, FiveSignsForm, ResultForm} from "widgets/index";
import {useSelector} from "react-redux";
import {selectBonusGame, selectSelectedSign} from "shared/slices/game-slice";

const StyledContainer = styled.div`

  display: grid;
  grid-row-gap: 45px;
  grid-template-rows: fit-content(5px) 1fr fit-content(5px);
  justify-items: center;

  min-width: 355px;
  max-width: 1360px;

  padding: 15px 15px 15px 15px;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    height: 100dvh;
    margin: 0 auto;
  }

  @media (min-width: 1025px) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 100%;
    height: 100%;

    max-height: 760px;
  }

`

export const MainPage = () => {
    const isBonusGame = useSelector(selectBonusGame);
    const selectedSign = useSelector(selectSelectedSign);

    return (
        <StyledContainer>
            <Header/>
            {selectedSign ? <ResultForm/> : isBonusGame ? <FiveSignsForm/> : <ThreeSignsForm/>}
            <Footer/>
        </StyledContainer>
    );
};
