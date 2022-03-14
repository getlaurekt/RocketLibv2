import {
  TypeInput,
  IdInput,
  NameInput,
  PlaceholderInput,
  MaxLengthInput,
  ValueInput,
  TitleInput,
  CheckedInput,
  StepInput,
  MinInput,
  MaxInput,
} from "../types/type.input";

interface InterfaceInput {
  type: TypeInput;
  id?: IdInput;
  name?: NameInput;
  placeholder?: PlaceholderInput;
  maxLength?: MaxLengthInput;
  value?: ValueInput;
  title?: TitleInput;
  checked?: CheckedInput;
  step?: StepInput;
  min?: MinInput;
  max?: MaxInput;
}

export default InterfaceInput;
