import { FC, ReactNode, Children, useContext, useEffect } from "react";
import { Grid } from "../Grid";
import { rowSelector, TableContext, tableSelector } from "./tableState";
import { useRecoilState } from "recoil";
import styled from "@emotion/styled";

const StyledRow = styled('tr')(({ columns, columnCount }: any) => ({
  alignItems: 'center',
  width: '100%',
  '&:nth-of-type(even)': {
    borderTop: '1px solid #e1e1e1',
    borderBottom: '1px solid #e1e1e1',
    background: '#f6f6f6',
  },
  '&:last-child': {
    borderBottom: '0',
  }
}))

interface TrProps {
  children: ReactNode | ReactNode[];
  header?: boolean;
  id?: string;
}

export const Tr: FC<TrProps> = (props) => {
  const c = Children.count(props.children)
  const tableId = useContext(TableContext)
  const [{ columns }, registerRow] = useRecoilState(rowSelector(tableId))
  const [t] = useRecoilState(tableSelector(tableId));
  const { children } = props;

  if (!c) return null;

  return (
    <StyledRow as={'tr'} columns={columns} rowCount={t.pageSize} columnCount={c} >
      {children}
    </StyledRow>
  )
}
