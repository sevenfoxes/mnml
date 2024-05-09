import { partialClass } from "./utils";
import { PrimitiveVariants } from "./type";
import { ComponentVariants } from "models/Stylable.model";
import { labeler } from "utils/standard/labeler";
import { colors } from "./colors";
import { card } from "./card";

const buttonLabel = labeler('Button')

const buttonRootBase = {
  alignItems: 'center',
  border: `2px solid transparent`,
  background: 'transparent',
  textOverflow: 'ellipsis',
  textAlign: 'center',
  fontSize: '.9rem',
  cursor: 'pointer',
  textTransform: 'capitalize',
  whiteSpace: 'nowrap',
  [partialClass(card.labels.header)]: {
    padding: 0
  },
  [partialClass(card.labels.footer)]: {
    padding: 0
  },

  '&:disabled': {
    opacity: '.5',
    cursor: 'default'
  }
}

export const button: PrimitiveVariants = {
  labels: {
    root: buttonLabel('Root')
  },
  styles: {
    [ComponentVariants.unstyled]: {
      root: buttonRootBase
    },
    [ComponentVariants.default]: {
      root: {
        ...buttonRootBase,
        border: '2px solid transparent',
        color: colors.primary,
        padding: 8
      }
    },
    [ComponentVariants.filled]: {
      root: {
        ...buttonRootBase,
        background: colors.primary,
        color: colors.white,
        borderRadius: 3,
        padding: 8
      }
    },
    [ComponentVariants.outlined]: {
      root: {
        ...buttonRootBase,
        borderRadius: 3,
        borderColor: colors.primary,
        borderWidth: 1,
        padding: 8,
        color: colors.primary,
      }
    },
    [ComponentVariants.rounded]: {
      root: {
        ...buttonRootBase,
        borderRadius: 3,
      }
    },
    [ComponentVariants.sharp]: {
      root: {
        ...buttonRootBase,
      }
    },
    [ComponentVariants.text]: {
      root: {
        ...buttonRootBase,
      }
    },
  }
}
