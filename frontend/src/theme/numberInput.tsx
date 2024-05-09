import { labeler } from "utils/standard/labeler";
import { colors } from "./colors";
import { PrimitiveVariants } from "./type";
import { ComponentVariants } from "models/Stylable.model";
import { capitalize } from "lodash/fp";

const numberLabel = labeler('NumberInput')
const labelKeys = [
  ["root"],
  ["start", "Icon"],
  ["end", "Icon"],
  ["input"]
]

const labels = labelKeys.reduce((acc, l) => {
  const label = l.map(la => capitalize(la)).join('')
  return {
    ...acc,
    [label]: numberLabel(label)
  }
}, {})

const unstyled = Object.keys(labels).reduce((acc, l) => ({ ...acc, [l]: {} }), {} as any)

const unstyledBase = {
  ...unstyled,
  input: {
    border: 'none',
  },
  root: {
    padding: 3,
  },
}

const base = {
  ...unstyledBase,
  root: {
    ...unstyledBase.root,
    position: 'relative',
  },
  input: {
    ...unstyledBase.input,
    background: 'transparent',
    '&:hover, &:focus, &:active': {
      outline: 'none',
    },
  }
}

export const numberInput: PrimitiveVariants = {
  labels,
  styles: {
    [ComponentVariants.unstyled]: {
      ...unstyledBase
    },
    [ComponentVariants.filled]: {
      ...base,
      inputWrapper: {
        display: 'grid',
        alignItems: 'center',
        gap: 5,
        padding: 3,
        background: colors.white,
      },
    },
    [ComponentVariants.rounded]: {
      ...base,
      background: colors.white,
      padding: '.25rem',
      borderRadius: 3,
    },
    [ComponentVariants.outlined]: {
      ...base,
      background: colors.white,
      padding: '.25rem',
      border: `1px solid ${colors.blue}`,
    },
    [ComponentVariants.default]: {
      ...base,
    },
  }
}
