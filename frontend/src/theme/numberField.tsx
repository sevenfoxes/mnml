import { ComponentVariants } from "models/Stylable.model";
import { labeler } from "utils/standard/labeler";
import { PrimitiveVariants } from "./type";

const numberLabel = labeler('NumberField')

const unstyledBase = {
}

const base = {
  ...unstyledBase
}


export const numberField: PrimitiveVariants = {
  labels: {
    root: numberLabel('Root'),
    label: numberLabel('Label'),
    input: numberLabel('Input'),
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
