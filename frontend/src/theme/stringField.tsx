import { ComponentVariants } from "models/Stylable.model";
import { labeler } from "utils/standard/labeler";
import { PrimitiveVariants } from "./type";

const stringLabel = labeler('StringField')

const unstyledBase = {

}

const base = {
  ...unstyledBase
}


export const stringField: PrimitiveVariants = {
  labels: {
    root: stringLabel('Root'),
    label: stringLabel('Label'),
    labelText: stringLabel('LabelText'),
    input: stringLabel('Input'),
    inputWrapper: stringLabel('InputWrapper')
  },
  styles: {
    [ComponentVariants.unstyled]: {
      ...unstyledBase,
    },
    [ComponentVariants.filled]: {
      ...base,
    },
    [ComponentVariants.rounded]: {
      ...base,
    },
    [ComponentVariants.outlined]: {
      ...base,
    },
    [ComponentVariants.default]: {
      ...base,
    },
  }
}
