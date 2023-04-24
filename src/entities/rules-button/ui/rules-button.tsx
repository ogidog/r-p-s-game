import * as React from 'react';
import styled from "styled-components";

const Button = styled.button`
  width: 150px;
  height: 50px;

  color: white;
  font-weight: 700;
  letter-spacing: 2px;

  background: none;

  border-radius: 15px;
  border: 2px solid #fafafa;

`

type Props = {};
export const RulesButton = (props: Props) => {
    return (
        <Button>
            RULES
        </Button>
    );
};
