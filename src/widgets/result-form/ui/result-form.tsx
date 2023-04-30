import * as React from 'react';
import styled from "styled-components";
import {HandSign} from "entities/index";
import {useDispatch, useSelector} from "react-redux";
import {IGameState, selectBonusGame, selectSelectedSign, setResult} from "shared/slices/game-slice";
import {SignType} from "app/types";
import {PlayAgain} from "features/index";
import {RULES, SIGNS} from "app/const";
import {useEffect} from "react";

const StyledContainer = styled.div`
  position: relative;

  display: grid;
  grid-template-columns: 1fr fit-content(5px) 1fr;
  grid-template-rows: 30px 1fr;
  grid-column-gap: 25px;
  justify-items: center;
  align-items: center;


  width: 100%;
  max-width: 800px;
  max-height: 400px;
  aspect-ratio: 1 / 1;

  align-self: center;
`

const Title = styled.span`
  color: white;
  font-size: 1.4em;
  letter-spacing: 1.5px;
`

const getRandomSign = (isBonusGame: boolean): SignType => {
    return SIGNS[isBonusGame ? Math.floor(Math.random() * 5) : Math.floor(Math.random() * 3)] as SignType;
};

const getGameResult = (yourSign: SignType, hostSign: SignType): IGameState["gameResult"] => {
    if (yourSign === hostSign) {
        return "DRAW";
    }

    return RULES[yourSign].includes(hostSign) ? "YOU WIN" : "YOU LOOSE";
}

const getSignWinState = (gameResult: IGameState["gameResult"]):boolean[] => {
    if (gameResult === "YOU WIN") {
        return [true, false]
    }
    if (gameResult === "YOU LOOSE") {
        return [false, true]
    }
    return [false, false]
}

export const ResultForm = () => {
    const selectedSign = useSelector(selectSelectedSign) as SignType;
    const isBonusGame = useSelector(selectBonusGame);
    const dispatch = useDispatch();

    const randomSign = getRandomSign(isBonusGame);
    const gameResult = getGameResult(selectedSign, randomSign);
    const signWinState = getSignWinState(gameResult);

    useEffect(() => {
        dispatch(setResult(gameResult))
    }, [])

    return (
        <StyledContainer>
            <Title style={{gridColumn: "1/1", gridRow: "1/1"}}>YOU PICKED</Title>
            <HandSign sign={selectedSign}
                      style={{
                          position: "relative",
                          width: "95%",
                          borderWidth: "30px",
                          gridColumn: "1/2",
                          gridRow: "2/3"
                      }}
                      disabled={true} isWin={signWinState[0]}/>
            <PlayAgain style={{gridColumn: "2/3", gridRow: "1/3", alignSelf: "center"}}/>
            <Title style={{gridColumn: "3/3", gridRow: "1/1"}}>THE HOUSE PICKED</Title>
            <HandSign sign={randomSign}
                      style={{
                          position: "relative",
                          width: "95%",
                          borderWidth: "30px",
                          gridColumn: "3/3",
                          gridRow: "2/3"
                      }}
                      disabled={true} isWin={signWinState[1]}/>
        </StyledContainer>
    );
};
