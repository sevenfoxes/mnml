import { FC } from "react";
import styled from "@emotion/styled";
import { DebouncedInput, DebouncedInputProps } from "./DebouncedInput";

interface OutlinedInputProps extends DebouncedInputProps {
  borderColor?: string;
}

const StyledInput = styled(DebouncedInput)(({ borderColor }: any) => {
  return {
    'label > div': {
      border: `1px solid ${borderColor || 'var(--blue)'}`,
      svg: {
        color: 'var(--blue)'
      }
    },
    input: {
      display: 'block',
      paddingBottom: 12,
      paddingTop: 12,
      borderRadius: 2
    }
  }
})

export const OutlinedInput: FC<OutlinedInputProps> = (props) => {
  return <StyledInput {...props} />
}
