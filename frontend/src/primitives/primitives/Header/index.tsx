import { FC } from 'react';
import styled from '@emotion/styled';
import { AccountTool } from './AccountTool';
import { Logo } from 'primitives/Logo';
import { useNavigate } from 'react-router-dom';
import { useDimensions } from 'utils/hooks/useDimensions';
import { Nav } from 'primitives/Nav';

const Root: any = styled('div')({
  label: 'PrimitiveHeader'
});

const Tools: any = styled('div')({
  color: 'var(--blue)',
  background: 'transparent',
  boxSizing: 'border-box',
  padding: '.5rem 1rem',
  margin: 0,
  label: 'PrimitiveHeaderTools'
});

const Head: any = styled('header')({
  alignItems: 'center',
  background: '#eee',
  boxSizing: 'border-box',
  color: 'var(--blue)',
  display: 'grid',
  gridTemplateColumns: '1fr auto',
  gridTemplateRows: 'auto auto',
  padding: '.5rem 1rem',
  margin: 0,
  label: 'PrimitiveHeaderHead'
});

export const Header: FC<any> = ({ children }) => {
  const navigate = useNavigate();
  const { ref } = useDimensions('header');
  const handleNav = (r) => {
    navigate(r)
  }

  return (
    <Root ref={ref}>
      <Head>
        <Logo />
        {children}
        <Tools>
          <AccountTool onClick={() => null} />
        </Tools>
      </Head>
      <Nav />
    </Root>
  );
}
