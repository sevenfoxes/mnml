import { createContext } from "react";
import { set as _set, get as _getstartsWith } from 'lodash/fp';
import { atomFamily, selectorFamily } from "recoil";
import { Direction } from "../Arrows/Arrow";
import { Matcher } from "./Td";
import { guardRecoilDefaultValue } from "utils/standard/guardRecoilDefaultValue";

export interface CellState<T> {
  width?: number;
  sortMethod?: Matcher<T>
}

export interface TableState {
  columns?: string;
  rows?: ((colCount: number) => string) | string;
  width?: any;
  minColWidth?: number;
  pageSize: number;
  currentPage: number;
  currentPageSize?: number;
  columnCount?: number;
  rowCount: number;
  initialSort?: any;
  tableSize?: number;
}

export interface TableInterface extends TableState {
  pageStart: number;
  pageExtent: number;
}

export const TableContext = createContext('');
export const tableState = atomFamily({
  key: 'TableState',
  default: {
    columns: '',
    currentPage: 0,
    minColWidth: 110,
    pageSize: 10,
    rowCount: 0,
    initialSort: ''
  } as TableState
})

export const tableSortedDirection = atomFamily({
  key: 'tableSortedDirection',
  default: Direction.up
})

export const tableSortedBy = atomFamily({
  key: 'tableSortedBy',
  default: ''
})

export const tablePage = atomFamily({
  key: 'tablePage',
  default: 1
})

export const cellState = atomFamily({
  key: 'cellState',
  default: {
    width: 0,
  } as CellState<any>
})

export interface RowSelector {
  columns?: string;
  columnCount?: number;
  row?: string;
}

export const rowSelector = selectorFamily({
  key: 'rowSelector',
  get: (tableId: string) => ({ get }): RowSelector => {
    const { columns } = get(tableState(tableId))

    if (!columns) return {} as RowSelector

    return {
      columns
    }
  },
  set: (tableId: string) => ({ get, set }, payload) => {
    const s = tableState(tableId);

    const { columnCount } = payload as RowSelector;

    const { minColWidth } = get(s)
    !!columnCount && set(s, p => ({
      ...p,
      columnCount: columnCount || 1
    }))

  }
})

export const tableSelector = selectorFamily({
  key: 'tableSelector',
  get: (id: string) => ({ get }): Partial<TableInterface> => {
    const t = get(tableState(id))
    const pageStart = 1 + t.pageSize * t.currentPage
    const extent = pageStart * t.currentPage + t.pageSize
    const pageExtent = t.rowCount <= extent ? t.rowCount : extent

    return { ...t, pageStart, pageExtent }
  },
  set: (id: string) => ({ set }, payload) => {
    if (guardRecoilDefaultValue(payload)) return null;
    const table = tableState(id);

    set(table, p => ({ ...p, ...payload }))
  }
})


export interface CellSelector<T> extends CellState<T> {
  sortDirection?: Direction;
  sortedBy?: string;
  tableId?: string;
  sortMethod?: Matcher<T>;
}

export const cellSelector = selectorFamily({
  key: 'cellSelector',
  get: (id: string) => ({ get }): CellSelector<any> => {
    const { width, sortMethod } = get(cellState(id))
    const sortDirection = get(tableSortedDirection(id))
    const sortedBy = get(tableSortedBy(id))
    const { initialSort } = get(tableSelector(id))

    return {
      sortDirection,
      sortMethod,
      sortedBy: sortedBy || initialSort,
      width
    }
  },
  set: (id: string) => ({ get, set }, cell) => {
    if (guardRecoilDefaultValue(cell)) return null;
    const oldGetSortedBy = get(tableSortedBy(id));

    const { tableId, sortedBy } = cell;
    sortedBy && !oldGetSortedBy && set(tableSortedBy(sortedBy), sortedBy)

  }
})
