import React from 'react';
import './css/App.css';
import styled from "styled-components";
import {MainPage} from "pages/index";
import {RulesModal} from "../widgets";

const StyledContainer = styled.div`
  position: relative;
  
  width: 100%;
  min-width: 100vw;
  min-height: 100vh;
  
  overflow: auto;
  
  background: radial-gradient(circle at top, var(--radial-gradient-from) 10%, var(--radial-gradient-to) 50%);
  
`

function App() {
    return (
        <StyledContainer>
            <RulesModal/>
            <MainPage/>
        </StyledContainer>
    );
}

export default App;
