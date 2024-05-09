import { labeler } from "utils/standard/labeler";
import { PrimitiveVariants } from "./type";
import { colors } from "./colors";
import { Variants } from "models/Stylable.model";
import { capitalize } from 'lodash/fp';

const inputLabel = labeler('Input')
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
    [label]: inputLabel(label)
  }
}, {})

const unstyled = Object.keys(labels).reduce((acc, l) => ({ ...acc, [l]: {} }), {} as any)

const unstyledBase = {
  ...unstyled,
  Root: {
    ...unstyled.root,
    display: 'grid',
    gap: 5
  }
}

const base = {
  ...unstyledBase,
  Input: {
    ...unstyledBase.input,
    border: 'none',
    background: 'transparent',
    padding: 0,
    '&:hover, &:focus, &:active': {
      outline: 'none',
    },
  },
  Root: ({ gridTemplateColumns }) => ({
    ...unstyledBase.root,
    gridTemplateColumns,
    position: 'relative',
  }),
  StartIcon: ({ fontSize, onClick }) => ({
    ...unstyledBase.startIcon,
    fontSize,
    cursor: !!onClick && 'pointer',
    left: 0,
    color: colors.blue,
  }),
  EndIcon: ({ fontSize, onClick }) => ({
    ...unstyledBase.endIcon,
    fontSize,
    cursor: !!onClick && 'pointer',
    right: 0,
    color: colors.blue,
  })
}

export const input: PrimitiveVariants = {
  labels,
  styles: {
    [Variants.unstyled]: {
      ...unstyledBase,
    },
    [Variants.filled]: {
      ...base,
      Root: {
        display: 'grid',
        alignItems: 'center',
        gap: 5,
        padding: 3,
        background: colors.white,
      }
    },
    [Variants.rounded]: {
      ...base,
      Root: {
        display: 'grid',
        alignItems: 'center',
        gap: 5,
        padding: 3,
        background: colors.white,
        borderRadius: 3,
      }
    },
    [Variants.outlined]: {
      ...base,
      Root: {
        ...base.root,
        display: 'grid',
        alignItems: 'center',
        gap: 5,
        border: `1px solid ${colors.blue}`,
        padding: 3,
        background: colors.white,
      }
    },
    [Variants.default]: {
      ...base,
      Root: {
        ...base.inputWrapper,
        display: 'grid',
        alignItems: 'center',
        gap: 5,
        borderBottom: `2px solid ${colors.blue}`,
      },
    },
  }
}
