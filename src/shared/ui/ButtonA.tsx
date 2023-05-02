import styled from "styled-components";

const Button = styled.button<Props>`
  width: 150px;
  height: 50px;

  color: ${props => props.invert ? "black" : "white"};
  font-weight: 700;
  letter-spacing: 2px;

  background: ${props => props.invert ? "white" : "none"};

  border-radius: 15px;
  border: 2px solid #fafafa;

  cursor: pointer;

`
type Props = { text: string, invert?: boolean, style?: { [key: string]: string }, events?: any };
export const ButtonA = (props: Props) => {
    return (
        <Button style={props.style} {...props.events} invert={props.invert}>
            {props.text}
        </Button>
    )
};
