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

  cursor: pointer;

`
type Props = { text: string, style?: { [key: string]: string }, events?: any };
export const ControlButton = (props: Props) => {
    return (
        <Button style={props.style} {...props.events}>
            {props.text.toUpperCase()}
        </Button>
    );
};
