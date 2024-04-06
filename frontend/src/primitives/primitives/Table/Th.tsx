import { Children, FC, useContext, useEffect } from "react";
import { useRecoilState } from "recoil";
import { Arrow, Direction } from "../Arrows/Arrow";
import { Tool } from "../Tool";
import { cellSelector, TableContext, tableSortedBy, tableSortedDirection } from "./tableState";
import { Matcher } from "./Td";
import styled from "@emotion/styled";

const Root = styled('th')(() => ({
  height: '100%',
}))

const ToolBox = styled('div')(() => ({
  width: 12
}))

const HeaderButton = styled('button')(({ theme, isActiveCell, right, center, nowrap }: any) => ({
  display: 'grid',
  gridTemplateColumns: '1fr auto',
  alignItems: 'center',
  background: isActiveCell ? theme.colors.highlightBlue : 'transparent',
  gap: '8px 3px',
  padding: '.5rem .5rem .5rem 1rem',
  fontSize: 14,
  fontWeight: 'normal',
  height: 'inherit',
  cursor: "pointer",
  width: '100%',
  margin: 0,
  border: 0,
  // textAlign: right && 'right' || center && 'center ' || 'left',
  whiteSpace: nowrap ? 'nowrap' : null,
  color: 'white',
  '&:focus': {
    outline: 'none',
    background: theme.colors.highlightBlue
  }
}))

interface ThProps<T extends unknown> {
  id: string;
  children: any;
  defaultSortIndex?: boolean;
  sortable?: boolean;
  [Direction.right]?: boolean;
  center?: boolean;
  nowrap?: boolean;
  sortMethod?: Matcher<T>;
}

export const Th: FC<ThProps<any>> = ({ id, sortable = true, children, right, center, nowrap, sortMethod }) => {
  const tableId = useContext(TableContext);
  const [{ sortedBy }, setCell] = useRecoilState(cellSelector(tableId))
  const [sortDirection, setSortDirection] = useRecoilState(tableSortedDirection(tableId));
  const [sortedId, setSortedId] = useRecoilState(tableSortedBy(tableId));
  const isSortedBy = id === sortedBy;

  useEffect(() => {
    sortMethod && setCell({ sortMethod });
    !sortedId && sortedBy && !!id && setSortedId(id)
  }, [sortMethod, isSortedBy])

  const handleClick = () => {
    if (sortable) {
      isSortedBy && setSortDirection((p) => p === Direction.up ? Direction.down : Direction.up)
      !isSortedBy && setSortedId(id)
    }
  }

  return (
    <Root>
      <HeaderButton isActiveCell={isSortedBy && children !== ' '} onClick={handleClick} right={right} center={center} nowrap={nowrap}>
        {children}
        {!!Children.count(children) && <ToolBox>
          <Tool sx={{ opacity: isSortedBy ? 1 : 0, transition: 'all .2s' }}>
            <Arrow component="div" direction={Direction.up} active={sortDirection === Direction.up} />
            <Arrow component="div" direction={Direction.down} active={sortDirection === Direction.down} />
          </Tool>
        </ToolBox>}
      </HeaderButton>
    </Root>
  )
}
