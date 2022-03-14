import styled from "styled-components";
import InterfaceInput from "../../interfaces/interface.input";

const Input = styled.input.attrs<InterfaceInput>((props) => ({
  type: props.type,
}))``;

export default Input;
