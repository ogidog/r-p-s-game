import * as React from 'react';
import styled from "styled-components";

import {HandSign} from "entities/index";

const StyledContainer = styled.div`
  @media (max-width: 768px) {

  }

  @media (min-width: 769px) {
  }
`

export const MainPage = () => {
    return (
        <StyledContainer>
            <HandSign/>
        </StyledContainer>
    );
};
