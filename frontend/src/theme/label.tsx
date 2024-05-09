import { ComponentVariants } from "models/Stylable.model";
import { PrimitiveVariants } from "./type";
import { labeler } from "utils/standard/labeler";

const labelLabel = labeler('Label')

const unstyledBase = {
  root: {
    alignItems: 'center',
    fontSize: 12,
    gap: 4,

  },
  inputWrapper: {
    alignItems: 'center',
    display: 'grid',
  }
}

const base = {
  ...unstyledBase
}

export const label: PrimitiveVariants = {
  labels: {
    root: labelLabel('Root'),
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
