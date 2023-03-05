import {FC} from 'react';
import styled from '@emotion/styled';

const Root: any = styled('div')(({theme}:any) => ({
  color: theme.colors.accept
}));

export const Header: FC<any> = ({ children }) => {
  return (
    <Root>
      {children}
    </Root>
  );
}
