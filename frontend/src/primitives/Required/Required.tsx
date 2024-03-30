import styled from "@emotion/styled";
import { FC, ReactNode } from "react";

interface RequiredProps {
  children?: ReactNode | string;
}

export const Root = styled('span')({
  color: 'var(--blue)',
  label: 'primitiveRequired'
})

export const Required: FC<RequiredProps> = (props) => {
  const { children } = props;

  return (
    <Root>
      {children || '*'}
    </Root>
  )
}
