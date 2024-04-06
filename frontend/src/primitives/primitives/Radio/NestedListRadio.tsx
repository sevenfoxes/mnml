import { FC } from "react"
import { Radio, RadioProps } from "./Radio"
import styled from "@emotion/styled"
import { LabelPostion } from "primitives/Label";

interface NestedListRadioProps extends RadioProps {
}

const StyledRadio = styled(Radio)(({ labelPosition }) => {
  return {
    label: 'NestedListCheckbox',
    alignItems: 'center',
    borderRadius: 0,
    color: 'var(--black)',
    display: 'grid',
    gridTemplateColumns: labelPosition === LabelPostion.after ? 'min-content 1fr' : '1fr min-content',
    minHeight: 45,
    minWidth: 300,
    width: '100%',
    borderTop: '1px solid var(--light)',
    fontSize: 12,
    gap: 8,
    padding: '0 1rem',
    '&:focus-visible': {
      outline: '2px solid var(--blue)'
    },
    '&:first-of-type': {
      borderTop: 'none'
    },
    '& + *:not(&)': {
      borderTop: '1px solid var(--light)',
    }
  }
});

export const NestedListRadio: FC<NestedListRadioProps> = (props) => {
  return <StyledRadio {...props} />
}
