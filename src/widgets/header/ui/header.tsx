import * as React from 'react';
import styled from "styled-components";

import {Logo, Score} from "entities/index";

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  
  border: 3px solid var(--header-outline);
  border-radius: 15px;
  
  padding: 18px;
  box-sizing: border-box;

  width: 100%;
  height: fit-content;
  
`

type Props = {};
export const Header = (props: Props) => {
    return (
        <StyledContainer>
            <Logo/>
            <Score/>
        </StyledContainer>
    );
};
