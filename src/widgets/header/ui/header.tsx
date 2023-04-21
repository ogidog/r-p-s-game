import * as React from 'react';
import styled from "styled-components";

import Logo from "../assets/images/logo.svg";
import LogoBonus from "../assets/images/logo-bonus.svg";
import {Score} from "../../../entities";

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
    
  width: 100%;
  min-width: 480px;
  height: fit-content;

  flex-basis: 109px;
  flex-shrink: 0;
  
  border: 3px solid var(--header-outline);
  border-radius: 15px;
  
  padding: 18px;
  box-sizing: border-box;
`

type Props = {};
export const Header = (props: Props) => {
    return (
        <StyledContainer>
            <img src={Logo} />
            <Score/>
        </StyledContainer>
    );
};
