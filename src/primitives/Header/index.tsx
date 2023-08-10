import {FC} from 'react';
import styled from '@emotion/styled';

const Root: any = styled('div')(({ theme }: any) => ({
  color: theme.colors.headerFg,
  background: theme.colors.headerBg,
  boxSizing: 'border-box',
  padding: '.5rem 1rem',
  margin: 0
}));

export const Header: FC<any> = ({ children }) => {
  return (
    <Root>
      {children}
    </Root>
  );
}
