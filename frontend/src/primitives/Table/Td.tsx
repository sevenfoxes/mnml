import styled from "@emotion/styled";
import { CustomMatcher, TableMatcher } from ".";
import { Direction } from "../Arrows/Arrow";
import { SerializedStyles } from "@emotion/react";

interface Root {
  theme: any;
  textAlign: Direction;
  nowrap: boolean;
}

const Root = styled('td')(({ theme, textAlign, nowrap, sx }: any) => {

  return ({
    wordBreak: 'break-word',
    // display: 'grid',
    gridTemplateColumns: 'auto',
    textAlign,
    whiteSpace: nowrap && 'nowrap',
    padding: '.5rem 1rem',
    ...sx
  })
})

export type Matcher<T> = TableMatcher | CustomMatcher<T>

export interface TdProps<T> {
  children: T;
  matcher?: TableMatcher;
  right?: boolean;
  center?: boolean;
  date?: boolean;
  nowrap?: boolean;
  sx?: SerializedStyles;
  colspan?: any;
}

export const Td = <T extends unknown>(props: TdProps<T>) => {
  const { children, sx = {}, right = false, center = false, nowrap = false } = props;
  return <Root {...props} sx={sx} nowrap={nowrap} textAlign={right && Direction.right || center && 'center'}>{children}</Root>

}
