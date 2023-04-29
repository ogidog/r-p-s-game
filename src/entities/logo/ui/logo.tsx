import * as React from 'react';
import styled from "styled-components";
import _Logo from "../assets/images/logo.svg";
import LogoBonus from "../assets/images/logo-bonus.svg";
import {useSelector} from "react-redux";
import {selectBonusGame} from "shared/slices/game-slice";


const StyledContainer = styled.div`
  display: flex;
  align-items: center;

  & img {
    width: 100%;
    height: 100%;
  }
`

export const Logo = () => {
    const isBonusGame = useSelector(selectBonusGame)

    return (
        <StyledContainer>
            <img src={isBonusGame ? LogoBonus : _Logo}/>
        </StyledContainer>
    );
};
