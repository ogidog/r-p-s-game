import * as React from 'react';
import styled from "styled-components";
import ImageRules from "../assets/image-rules.svg";
import ImageRulesBonus from "../assets/image-rules-bonus.svg";
import IconClose from "../assets/icon-close.svg";
import {useDispatch, useSelector} from "react-redux";
import {selectBonusGame, selectRulesVisible, showRules,} from "shared/slices/game-slice";

const StyledContainer = styled.div<{ isRulesVisible: boolean }>`
  position: absolute;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;

  background-color: rgb(8, 15, 44, 0.4);

  visibility: ${props => props.isRulesVisible ? 'visible' : 'hidden'};
  z-index: 99;
`

const Rules = styled.div<{ isBonusGame: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  padding: 20px;

  width: 490px;
  aspect-ratio: 1/1;

  border-radius: 10px;

  background-color: white;
  box-sizing: border-box;
`

const CloseButton = styled.img`
  width: 20px;
  height: auto;
  cursor: pointer;
`
const Title = styled.span`
  font-size: 1.8em;
  font-weight: 700;
  letter-spacing: 2px;
  color: var(--dark-text);
`

const RulesImg = styled.img`
  padding: 20px;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
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
            <Rules isBonusGame={isBonusGame}>
                <Title>RULES</Title>
                <CloseButton src={IconClose} onClick={closeClickHandle}/>
                <RulesImg src={ImageRulesBonus}/>
            </Rules>
        </StyledContainer>
    );
};
