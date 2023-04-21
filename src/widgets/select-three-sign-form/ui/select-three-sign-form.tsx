import * as React from 'react';
import styled from "styled-components";
import {HandSign} from "entities/index";

const StyledContainer = styled.div`
  box-sizing: border-box;

  width: 100%;
  min-height: 300px;

  flex: 2 0 300px;

`

type Props = {};
export const SelectThreeSignForm = (props: Props) => {
    return (
        <StyledContainer>
            <HandSign sign={"paper"}/>
            <HandSign sign={"rock"}/>
            <HandSign sign={"scissors"}/>
        </StyledContainer>
    );
};
