import * as React from 'react';
import styled from "styled-components";
import _Logo from "../assets/images/logo.svg";
import LogoBonus from "../assets/images/logo-bonus.svg";


const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  
  & img{
    width: 100%;
    height: 100%;
  }
`

type Props = {};
export const Logo = (props: Props) => {
    return (
        <StyledContainer>
            <img src={_Logo}/>
        </StyledContainer>
    );
};
