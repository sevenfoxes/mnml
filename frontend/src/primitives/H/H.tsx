import styled from "@emotion/styled";
import { FC, ReactNode } from "react";

interface HProps {
  component?: string;
  children: ReactNode;
  sx?: object;
  className?: any;
}

const StyledH: FC<any> = styled('h1')(({ theme, as, sx = {} }: any) => ({
  fontWeight: 'normal',
  ...sx
}))

export const H: FC<HProps> = (props) => {
  const { sx, children, component = 'h1', className } = props;

  return (
    <StyledH as={component} sx={sx} className={className}>
      {children}
    </StyledH>
  )
}
