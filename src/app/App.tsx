import React from 'react';
import './css/App.css';
import styled from "styled-components";
import {MainPage} from "pages/index";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  width: 100vw;
  height: 100vh;
  
  overflow: auto;
  
  background: radial-gradient(circle at top, var(--radial-gradient-from) 10%, var(--radial-gradient-to) 50%);
  
`

function App() {
    return (
        <StyledContainer>
            <MainPage/>
        </StyledContainer>
    );
}

export default App;
