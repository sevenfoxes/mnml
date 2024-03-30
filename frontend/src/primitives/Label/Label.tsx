import styled from "@emotion/styled"
import { FC } from "react"

export enum LabelPostion {
  before = 'before',
  after = 'after'
}

interface LabelProps {
  children: any;
  htmlFor: string;
  className?: string;
}

const StyledLabel = styled('label')(({
  label: 'primitiveLabel',
  gap: 4,
  display: 'flex',
  alignItems: 'center',
  input: {
    margin: 0
  }
}))

export const Label: FC<LabelProps> = (props) => {
  const { children } = props;

  return (
    <StyledLabel {...props}>
      {children}
    </StyledLabel>
  )
}
