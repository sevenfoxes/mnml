import { labeler } from "utils/standard/labeler";
import { colors } from "./colors";
import { spacing } from "./spacing";
import { PrimitiveVariants } from "./type";
import { ComponentVariants } from "models/Stylable.model";

const cardLabel = labeler('Card')

const headerBase = {
  overflow: 'hidden',
  gridTemplateColumns: 'auto 1fr',
  padding: '.5rem',
  background: colors.blue1,
  display: 'grid',
  alignItems: 'center',
  gap: '.5rem',
  fontSize: 12,
  lineHeight: '22px',
  height: 41,
}

const subHeaderBase = {
  display: 'grid',
  gap: spacing.half,
  background: colors.grey0,
  border: `1px solid transparent`,
  borderBottomColor: colors.grey2,
  borderLeftColor: colors.grey2,
  borderRightColor: colors.grey2,
  padding: `5px ${spacing.half}`,
}

export const card: PrimitiveVariants = {
  labels: {
    root: cardLabel('Root'),
    footer: cardLabel('Footer'),
    tools: cardLabel('Tools'),
    header: cardLabel('Header'),
    subHeader: cardLabel('SubHeader'),
  },
  styles: {
    [ComponentVariants.default]: {
      header: {
        ...headerBase
      },
      subHeader: {
        ...subHeaderBase
      },
      root: {
        fontSize: 12,
        background: colors.white,
        display: 'grid',
        gridTemplateRows: 'auto 1fr',
        position: 'relative',
        minWidth: '100px'
      },
      footer: {
        display: 'grid',
        justifyContent: 'end',
        borderTop: `1px solid ${colors.grey2}`,
        padding: spacing.half
      },
      content: {},
    },
    [ComponentVariants.outlined]: {
      content: {
        border: `1px solid ${colors.grey2}`,
        borderTop: 0,
      },
      header: {
        ...headerBase,
        border: `1px solid ${colors.grey2}`,
      },
      subHeader: {
        ...subHeaderBase
      },
      footer: {
        alignItems: 'center',
        display: 'grid',
        gridAutoFlow: 'column',
        justifyContent: 'end',
        padding: `${spacing.quarter} ${spacing.half}`,
        borderBottom: `1px solid ${colors.grey2}`,
        borderLeft: `1px solid ${colors.grey2}`,
        borderRight: `1px solid ${colors.grey2}`,
        background: colors.grey0
      },
      root: {
        minWidth: 240,
        fontSize: 12,
        position: 'relative',
        gridTemplateRows: '47px 1fr',
      }
    }
  }
}
