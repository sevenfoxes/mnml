import { FC, ReactNode, useEffect } from "react";
import { Grid } from "../Grid";
import { TableContext, tablePage, tableSelector } from "./tableState";
import { useRecoilState, useRecoilStateLoadable, useSetRecoilState } from "recoil";
import { Arrow, Direction } from "../Arrows/Arrow";
import styled from "@emotion/styled";

type TableProps = {
  children: ReactNode | ReactNode[]
  id: string;
  showFooter?: boolean;
  initialSort?: string;
  tableSize?: number;
  pageSize?: number;
  pageNumber?: number;
  className?: string;
}

export const StyledTable = styled('table')(() => ({
  borderCollapse: 'collapse',
  width: 'inherit',
  fontSize: 12
}));

export const Footer = styled(Grid)(({ theme }: any) => ({
  alignItems: 'center',
  gridTemplateColumns: 'auto auto',
  background: theme.colors.main,
  borderCollapse: 'collapse',
  color: theme.colors.white,
  justifyContent: 'end',
  padding: '.5rem 1rem',
  gap: '.25rem'
}));

export const Pager = styled(Grid)(() => ({
  alignItems: 'center',
  gap: 3,
  gridTemplateColumns: 'auto auto auto auto'
}));

const resetStyles = {
  width: '100%',
  display: 'block'
}


export const Table: FC<TableProps> = (props) => {
  const { id, initialSort, pageSize, className, tableSize, showFooter = false, pageNumber } = props;
  const [t, setTable] = useRecoilState<any>(tableSelector(id));
  const [tp, setTablePage] = useRecoilState(tablePage(id))
  const pn = Number(pageNumber) - 1

  useEffect(() => {
    !!pageNumber && pageNumber !== tp && setTablePage(pageNumber)
    !!initialSort && setTable({ initialSort })
    !!tableSize && setTable({ tableSize })

  }, [initialSort, tableSize, pageNumber])

  useEffect(() => {
    setTable((p) => ({ ...p, pageSize, totalItems: t.tableSize }))

  }, [pageSize])

  const offset = pn && pageSize ? ((pn - 1) * pageSize) : 0;

  const handlePagePrev = () => {
    if (1 + (pn * pageSize) - pageSize > 0) {
      setTablePage(p => p - 1)
    }
  }

  const handlePageNext = () => {
    if (t.tableSize > (pageSize * (pn + 1))) {
      setTablePage(p => p + 1)
    }
  }

  return (
    <TableContext.Provider value={id}>
      <StyledTable className={className}>
        {props.children}
        {showFooter && (
          <tfoot style={resetStyles}>
            <tr style={resetStyles}>
              <td style={resetStyles}>
                {!!pageSize && !!t.tableSize && (
                  <Footer>
                    {pageSize !== t.tableSize && (
                      <>
                        <Pager>
                          <Arrow
                            onClick={handlePagePrev}
                            direction={Direction.left}
                            active={!!(pn * pageSize)}
                            disabled={!pn}
                            sx={{ height: '100%' }}
                          />
                          {1 + (pn * pageSize)} - {pageSize > t.tableSize ? t.tableSize : (pageSize * (pn + 1))}
                          <Arrow
                            onClick={handlePageNext}
                            direction={Direction.right}
                            active={t.tableSize > pageSize + offset}
                            disabled={t.tableSize === pageSize + offset}
                            sx={{ height: '100%' }}
                          />
                        </Pager> of {t.tableSize}
                      </>)
                    }
                  </Footer>
                )}
              </td>
            </tr>
          </tfoot>
        )}
      </StyledTable>
    </TableContext.Provider>
  )
}
