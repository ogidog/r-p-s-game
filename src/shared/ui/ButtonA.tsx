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
type Props = { text: string, style?: { [key: string]: string }, class?: string, events?: any };
export const ButtonA = (props: Props) => {
    return (
        <Button style={props.style} className={props.class} {...props.events} >
            {props.text}
        </Button>
)};
