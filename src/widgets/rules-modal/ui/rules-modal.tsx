import * as React from 'react';
import styled from "styled-components";
import ImageRules from "../assets/image-rules.svg";
import ImageRulesBonus from "../assets/image-rules-bonus.svg";
import IconClose from "../assets/icon-close.svg";
import {useDispatch, useSelector} from "react-redux";
import {selectBonusGame, selectRulesVisible, showRules,} from "shared/slices/game-slice";

const StyledContainer = styled.div<{ isRulesVisible: boolean }>`
  @media (max-width: 1024px) {
    background-color: white;
    padding-top: 15%;
    padding-bottom: 15%;
    box-sizing: border-box;
  }

  @media (min-width: 1025px) {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(8, 15, 44, 0.4);
  }

  position: absolute;
  width: 100vw;
  height: 100vh;

  visibility: ${props => props.isRulesVisible ? 'visible' : 'hidden'};
  z-index: 99;
`

const Rules = styled.div`
  @media (max-width: 1024px) {
    display: grid;
    grid-template-areas: "title" "rules" "close";
    grid-template-rows: fit-content(5px) 1fr fit-content(5px);
    justify-items: center;
    align-items: center;

    width: 100%;
    min-width: 355px;
    height: 100%;
  }

  @media (min-width: 1025px) {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;

    padding: 20px;
    box-sizing: border-box;

    width: 490px;
    aspect-ratio: 1/1;

    border-radius: 10px;

    background-color: white;
  }

`

const CloseButton = styled.img`
  width: 20px;
  height: auto;
  cursor: pointer;

  grid-area: close;
`
const Title = styled.span`
  font-size: 1.8em;
  font-weight: 700;
  letter-spacing: 2px;
  color: var(--dark-text);

  grid-area: title;
`

const RulesImg = styled.img<{ isBonusGame: boolean }>`
  
  @media (min-width: 1025px) {
    padding: 20px;
    box-sizing: border-box;
    width: 100%;
    height: ${props => !props.isBonusGame ? "91%" : "100%"};
  }
  
  grid-area: rules;
`

export const RulesModal = () => {
    const isBonusGame = useSelector(selectBonusGame);
    const isRulesVisible = useSelector(selectRulesVisible);
    const dispatch = useDispatch();

    const closeClickHandle = () => {
        dispatch(showRules())
    }

    return (
        <StyledContainer isRulesVisible={isRulesVisible}>
            <Rules>
                <Title>RULES</Title>
                <CloseButton src={IconClose} onClick={closeClickHandle}/>
                <RulesImg isBonusGame={isBonusGame} src={isBonusGame ? ImageRulesBonus : ImageRules}/>
            </Rules>
        </StyledContainer>
    );
};
