import * as React from 'react';
import {ButtonB} from "shared/ui/ButtonB";
import styled from "styled-components";
import {useSelector} from "react-redux";
import {selectGameResult} from "shared/slices/game-slice";
import {FC} from "react";

const StyledContainer = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  grid-row-gap: 10px;
`

const Title = styled.span`
  font-size: 2.7em;
  color: white;
`

type Props = {
    style?: { [key: string]: string | number };
};

export const PlayAgain: FC<Props> = (props) => {

    const gameResult = useSelector(selectGameResult)

    return (
        <StyledContainer style={{...props.style}}>
            {gameResult &&
                <>
                    <Title>{gameResult}</Title>
                    <ButtonB text={"play again".toUpperCase()}/>
                </>
            }
        </StyledContainer>
    )
};
