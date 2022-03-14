import styled from "styled-components";
import InterfaceLabel from "../../interfaces/interface.label";

const Label = styled.label.attrs<InterfaceLabel>((props) => ({
  for: props.for,
}))``;

export default Label;
