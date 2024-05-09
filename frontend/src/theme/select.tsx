import { labeler } from "utils/standard/labeler"

const selectLabel = labeler('Select')

export const labels = {
  root: selectLabel('Root'),
  header: selectLabel('Header'),
  footer: selectLabel('Footer'),
  tools: selectLabel('Tools'),
  subheader: selectLabel('Subheader'),
}


export const styles = {
  default: {
    root: {
      display: 'block',
    }
  },
  filled: {
    root: {
      display: 'block',
    }
  },
  rounded: {
    root: {
      display: 'block',
    }
  },
  outlined: {
    root: {
      display: 'block',
    }
  }
}
