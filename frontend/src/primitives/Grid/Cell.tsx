
import { FC } from "react";
import { GridProps } from "./Grid";
import styled from "@emotion/styled";

type CellProps = GridProps & {
  children: any;
  className?: string;
  as?: any;
}

const Root = styled('div')(({ }: any) => ({
  label: 'PrimitiveGridCell',
  '& > *': {
    width: '100%'
  }
}));

export const Cell: FC<CellProps> = (props) => {
  const {
    className,
    children,
    as = 'div',
    ...style
  } = props;

  return (
    <Root as={as} className={className} {...style}>
      {children}
    </Root>
  )
}
