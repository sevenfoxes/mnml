import styled from "@emotion/styled"
import { ElementType, FC } from "react";

interface NoWrapProps {
  className?: string;
  as?: ElementType<any>;
  children: any;
}

const Root = styled('div')(() => ({
  whiteSpace: 'nowrap'
}))

export const NoWrap: FC<NoWrapProps> = (props) => {
  const { children, as = 'div', className } = props;
  return (
    <Root as={as} className={className}>
      {children}
    </Root>
  )
}
