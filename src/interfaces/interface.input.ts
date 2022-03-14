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
  Type: TypeInput;
  Id?: IdInput;
  Name?: NameInput;
  Placeholder?: PlaceholderInput;
  MaxLength?: MaxLengthInput;
  Value?: ValueInput;
  Title?: TitleInput;
  Checked?: CheckedInput;
  Step?: StepInput;
  Min?: MinInput;
  Max?: MaxInput;
}

export default InterfaceInput;
