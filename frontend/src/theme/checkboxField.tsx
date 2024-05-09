import { ComponentVariants } from "models/Stylable.model";
import { labeler } from "utils/standard/labeler";
import { PrimitiveVariants } from "./type";
import { colors } from "./colors";

const checkboxLabel = labeler('CheckboxField')


const checkboxRootUnstyledBase = {

}
const checkboxRootBase = {
  ...checkboxRootUnstyledBase,
}

export const checkboxField: PrimitiveVariants = {
  labels: {
    root: checkboxLabel('Root')
  },
  styles: {
    [ComponentVariants.unstyled]: {
      root: {
        ...checkboxRootUnstyledBase
      }
    },
    [ComponentVariants.default]: {
      root: {
        ...checkboxRootBase
      }
    },
    [ComponentVariants.filled]: {
      root: {
        ...checkboxRootBase
      }
    },
    [ComponentVariants.outlined]: {
      root: {
        ...checkboxRootBase
      }
    },
    [ComponentVariants.rounded]: {
      root: {
        ...checkboxRootBase
      }
    },
    [ComponentVariants.sharp]: {
      root: {
        ...checkboxRootBase
      }
    },
    [ComponentVariants.text]: {
      root: {
        ...checkboxRootBase
      }
    },
  }
}
