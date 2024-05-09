import { ComponentVariants } from "models/Stylable.model";
import { labels as cardLabels } from "primitives/Card";
import { labeler } from "utils/standard/labeler";
import { PrimitiveVariants } from "./type";
import { partialClass } from './utils';

const iconButtonLabel = labeler('iconButton')

const rootUnstyled = {
  display: 'flex',
  alignItems: 'center',
  gap: 3,
}

const rootBase = {
  ...rootUnstyled,
  [partialClass(cardLabels.header)]: {
    padding: 0
  },
  [partialClass(cardLabels.footer)]: {
    padding: 0
  },
  [partialClass(cardLabels.subheader)]: {
    padding: 0
  },
}

export const iconButton: PrimitiveVariants = {
  labels: {
    root: iconButtonLabel('Root'),
    label: iconButtonLabel('Label'),
    labelText: iconButtonLabel('LabelText'),
    input: iconButtonLabel('Button')
  },

  styles: {
    [ComponentVariants.unstyled]: {
      root: {
        ...rootUnstyled
      }
    },
    [ComponentVariants.default]: {
      root: {
        ...rootBase,
      }
    },
    [ComponentVariants.filled]: {
      root: {
        ...rootBase
      }
    },
    [ComponentVariants.outlined]: {
      root: {
        ...rootBase
      }
    }
  }
}
