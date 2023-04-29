import * as React from 'react';
import styled from "styled-components";
import {SelectBonus, ShowRules} from "../../../features";

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  justify-items: stretch;

  width: 100%;
  height: fit-content;
`

export const Footer = () => {


    return (
        <StyledContainer>
            <SelectBonus/>
            <ShowRules/>
        </StyledContainer>
    );
};
