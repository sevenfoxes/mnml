export enum TableMatcher {
  date = 'date',
  currency = 'currency',
  string = 'string',
  number = 'number',
}

export type CustomMatcher<T> = (v: T) => string;
export type TableRow<T> = {
  children: T
}

export * from './Thead'
export * from './Tfoot'
export * from './Tbody'
export * from './Table'
export * from './Td'
export * from './Th'
