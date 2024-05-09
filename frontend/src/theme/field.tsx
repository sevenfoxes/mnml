import { partialClass } from "./utils";
import { PrimitiveVariants } from "./type";
import { ComponentVariants } from "models/Stylable.model";
import { labeler } from "utils/standard/labeler";
import { colors } from "./colors";
import { card } from "./card";

const fieldLabel = labeler('Field')

const fieldRootBase = {
  '& + &': {
    paddingTop: 2
  },
  [partialClass(card.labels.header)]: {
    padding: 0,
    maxWidth: 100
  },
  [partialClass(card.labels.subheader)]: {
    padding: 0
  }
}

const fieldErrorBase = {
  padding: '2px 0 0 0',
  fontSize: 12,
  color: colors.danger,
  textAlign: 'left',
  height: 20
}

export const field: PrimitiveVariants = {
  labels: {
    root: fieldLabel('Root'),
    error: fieldLabel('Error'),
  },
  styles: {
    [ComponentVariants.default]: {
      root: {
        ...fieldRootBase,
      },
      error: {
        ...fieldErrorBase
      }
    },
    [ComponentVariants.filled]: {
      root: {
        ...fieldRootBase,
        [partialClass(card.labels.header)]: {
          padding: 0,
          maxWidth: 100
        },
        [partialClass(card.labels.subheader)]: {
          padding: 0
        }
      },
      error: {
        ...fieldErrorBase
      }
    },
    [ComponentVariants.outlined]: {
      root: {
        ...fieldRootBase,
        [partialClass(card.labels.header)]: {
          padding: 0,
          maxWidth: 100
        },
        [partialClass(card.labels.subheader)]: {
          padding: 0
        }
      },
      error: {
        ...fieldErrorBase
      }
    },
    [ComponentVariants.rounded]: {
      root: {
        ...fieldRootBase,
        [partialClass(card.labels.header)]: {
          padding: 0,
          maxWidth: 100
        },
        [partialClass(card.labels.subheader)]: {
          padding: 0
        }
      },
      error: {
        ...fieldErrorBase
      }
    },
    [ComponentVariants.sharp]: {
      root: {
        ...fieldRootBase,
        [partialClass(card.labels.header)]: {
          padding: 0,
          maxWidth: 100
        },
        [partialClass(card.labels.subheader)]: {
          padding: 0
        }
      },
      error: {
        ...fieldErrorBase
      }
    },
    [ComponentVariants.text]: {
      root: {
        ...fieldRootBase
      },
      error: {
        ...fieldErrorBase
      }
    },

  }
}
