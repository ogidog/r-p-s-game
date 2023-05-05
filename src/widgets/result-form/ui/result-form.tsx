import * as React from 'react';
import styled from "styled-components";
import {HandSign} from "entities/index";
import {useDispatch, useSelector} from "react-redux";
import {
    IGameState,
    selectBonusGame,
    selectGameScore,
    selectSelectedSign,
    setResult,
    setScore
} from "shared/slices/game-slice";
import {SignType} from "app/types";
import {PlayAgain} from "features/index";
import {RULES, SIGNS} from "app/const";
import {useEffect, useState} from "react";

const StyledContainer = styled.div`
  position: relative;

  display: grid;
  justify-items: center;
  align-items: center;

  width: 100%;
  max-width: 800px;
  max-height: 400px;
  aspect-ratio: 1 / 1;

  align-self: center;

  @media (min-width: 1025px) {
    grid-template-areas: "yourSignTitle playAgain houseSignTitle" "yourSign playAgain houseSign";
    grid-template-columns: 1fr fit-content(5px) 1fr;
    grid-template-rows: 50px 1fr;
    grid-column-gap: 25px;
  }

  @media (max-width: 1024px) {
    grid-template-areas: "yourSignTitle houseSignTitle" "yourSign houseSign" "playAgain playAgain";
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 30px 1fr fit-content(5px);
    grid-row-gap: 25px;
    grid-column-gap: 25px;
  }
`

const Title = styled.span`
  color: white;
  font-size: 1.4em;
  letter-spacing: 1.5px;
  text-align: center;
`

const getRandomSign = (isBonusGame: boolean): SignType => {
    return SIGNS[isBonusGame ? Math.floor(Math.random() * 5) : Math.floor(Math.random() * 3)] as SignType;
};

const getGameResult = (yourSign: SignType, houseSign: SignType): IGameState["gameResult"] => {
    if (yourSign === houseSign) {
        return "DRAW";
    } else {
        return RULES[yourSign].includes(houseSign) ? "YOU WIN" : "YOU LOOSE";
    }
}

const getSignWinState = (gameResult: IGameState["gameResult"]): boolean[] => {
    if (gameResult === "YOU WIN") {
        return [true, false]
    }
    if (gameResult === "YOU LOOSE") {
        return [false, true]
    }
    return [false, false]
}

const computeScore = (gameResult: IGameState["gameResult"], gameScore: IGameState["gameScore"]) => {
    if (gameResult === "YOU WIN") {
        gameScore += 1;
    }
    if (gameResult === "YOU LOOSE") {
        gameScore -= 1;
    }
    localStorage["gameScore"] = gameScore;

    return gameScore;
}

export const ResultForm = () => {
    const selectedSign = useSelector(selectSelectedSign) as SignType;
    const isBonusGame = useSelector(selectBonusGame);
    let gameScore = useSelector(selectGameScore);

    const dispatch = useDispatch();
    let [[houseSign, signWinState], setState] = useState<[SignType | "", boolean[]]>(["", [false, false]]);

    useEffect(() => {
        const timeout = setTimeout(() => {
            houseSign = getRandomSign(isBonusGame);
            const gameResult = getGameResult(selectedSign, houseSign);
            signWinState = getSignWinState(gameResult);
            gameScore = computeScore(gameResult, gameScore);

            setState([houseSign, [...signWinState]])
            dispatch(setResult(gameResult))
            dispatch(setScore(gameScore));
        }, 700);

        return () => clearTimeout(timeout);

    }, [])

    return (
        <StyledContainer>
            <Title style={{gridArea: "yourSignTitle"}}>YOU PICKED</Title>
            <HandSign sign={selectedSign}
                      style={{
                          position: "relative",
                          width: "85%",
                          gridArea: "yourSign"
                      }}
                      disabled={true} isWin={signWinState[0]}/>
            <PlayAgain style={{gridArea: "playAgain", alignSelf: "center"}}/>
            <Title style={{gridArea: "houseSignTitle"}}>THE HOUSE PICKED</Title>
            <HandSign sign={houseSign}
                      style={{
                          position: "relative",
                          width: "85%",
                          gridArea: "houseSign"
                      }}
                      disabled={true} isWin={signWinState[1]}/>
        </StyledContainer>
    );
};
