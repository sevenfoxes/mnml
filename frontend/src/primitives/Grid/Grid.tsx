import { SerializedStyles } from "@emotion/react";
import styled from "@emotion/styled";
import { Children, FC } from "react";

export interface GridProps {
  as?: any;
  children: any;
  childrenAsColumns?: boolean;
  childrenAsRows?: boolean;
  className?: string;
  columnCount?: number;
  columns?: string;
  columnSize?: string
  gap?: string;
  ref?: any;
  rowCount?: number;
  rows?: string;
  rowSize?: string;
  sx?: SerializedStyles;
}

const Root = styled('div')(({ columns, rows, gap, sx }: any) => {
  return {
    display: 'grid',
    gap,
    gridTemplateColumns: columns,
    gridTemplateRows: rows,
    label: 'PrimitiveGrid',
    ...sx
  }
});

export const Grid: FC<GridProps> = (props) => {
  const childCount = Children.count(props.children)
  const {
    children,
    childrenAsColumns,
    childrenAsRows,
    columnCount = 1,
    columns,
    columnSize = 'auto',
    rowCount = 1,
    rows,
    rowSize = 'auto',
    ...rest
  } = props;

  const c = childrenAsColumns ? `repeat(${childCount / rowCount}, ${columnSize})` : columns
  const r = childrenAsRows ? `repeat(${childCount / columnCount}, ${rowSize})` : rows

  return (
    <Root
      {...rest}
      columns={c}
      rows={r}
    >
      {children}
    </Root>
  )
}
