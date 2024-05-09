import { ComponentVariants } from "models/Stylable.model";
import { labeler } from "utils/standard/labeler";
import { PrimitiveVariants } from "./type";
import { colors } from "./colors";

const checkboxLabel = labeler('CheckboxInput')


const checkboxRootUnstyled = {
  cursor: 'pointer'
}

const checkboxRootBase = {
  ...checkboxRootUnstyled,
  color: colors.primary
}

export const checkbox: PrimitiveVariants = {
  labels: {
    root: checkboxLabel('Root')
  },
  styles: {
    [ComponentVariants.unstyled]: {
      root: {
        ...checkboxRootUnstyled
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
