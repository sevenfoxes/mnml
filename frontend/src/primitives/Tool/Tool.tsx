import { FC } from "react";
import styled from "@emotion/styled";
import { SerializedStyles } from "@emotion/react";

export type ToolProps = {
  children: any;
  showFooter?: boolean;
  title?: string;
  devMode?: boolean;
  columns?: string;
  rows?: string;
  gap?: string;
  sx?: SerializedStyles;
  component?: string;
  className?: string;
}

const Root = styled('div')(({ sx }: any) => (sx));

export const Tool: FC<ToolProps> = (props) => {
  const {
    className,
    children,
    component = 'div',
    sx,
    ...rest
  } = props;

  return (
    <Root as={component} className={className} sx={sx} {...rest}>
      {children}
    </Root>
  )
}
