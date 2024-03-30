import { FC } from 'react';
import styled from '@emotion/styled';
import p from '../../../package.json';

const Root: any = styled('h1')(() => {

  return {
    margin: 0,
    padding: 0,
    alignItems: 'center',
    color: 'var(--blue)',
    gap: '0 .3rem',
    textDecoration: 'none',
    textTransform: 'uppercase',
    userSelect: 'none',
    fontWeight: 'normal',
    lineHeight: '1',
    label: 'primitivelogo'
  }
});

const Author: any = styled('span')(() => {
  return {
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    textDecoration: 'none',
    fontSize: '.78rem',
    fontWeight: 300,
    display: 'block',
    height: 19,
    position: 'relative',
    overflow: 'hidden',
    width: 225,
    marginTop: 5,
    letterSpacing: 1,
    label: 'primitivelogoAuthor'
  }
});

const AppName: any = styled('span')(() => {
  return {
    gridColumnStart: 2,
    textDecoration: 'none',
    fontSize: '1.095rem',
    letterSpacing: 17,
    label: 'primitivelogoAppName'
  }
});

export const Logo: FC<any> = ({ variant }) => {

  return (
    <Root to={'/'} variant={variant}>
      <AppName>
        {p.name}
      </AppName>
      <Author>
        <span>{p.author}</span>
      </Author>
    </Root>
  );
}
