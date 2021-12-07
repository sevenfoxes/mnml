import { FC } from 'react';
import styled from '@emotion/styled';
import { useRecoilValue } from 'recoil';
import { appState, routesState } from '@/appState';
import { Link } from 'primitives/Link';
import { SvgFragment } from 'primitives/SvgFragment';

const Root: any = styled(Link)(({ theme, variant }: any) => {

  return {
    ...theme.logo,
    alignItems: 'center',
    gap: '0 .3rem',
    display: 'grid',
    gridTemplateColumns: 'min-content 1fr',
    gridTemplateRows: 'auto auto',
    textDecoration: 'none',
    textTransform: 'uppercase',
    userSelect: 'none'
  }
});

const CompanyName: any = styled('span')(({ theme }: any) => {
  return {
    textDecoration: 'none',
    fontFamily: theme.fonts.brandonFont,
    fontSize: '1rem',
    fontWeight: 'bold',
    display: 'block',
    letterSpacing: 2,
    position: 'relative',

    "&:after": {
      display: 'block',
      content: '""',
      width: '15%',
      height: 2,
      position: 'absolute',
      bottom: -3,
      background: 'currentColor'
    }
  }
});

const AppName: any = styled('span')(({ theme }: any) => {
  return {
    gridColumnStart: 2,
    textDecoration: 'none',
    fontFamily: theme.fonts.brandonFont,
    fontSize: '.7rem',
    letterSpacing: 1,
    fontWeight: 'bold'
  }
});

export const Logo: FC<any> = ({ variant }) => {
  const { companyName, name } = useRecoilValue(appState);
  const { home } = useRecoilValue(routesState);

  return (
    <Root href={home} variant={variant}>
      <SvgFragment icon={"logo-small"} sx={{ gridRow: 'span 2', height: 60, width: 44 }} />
      <CompanyName>
        {companyName}
      </CompanyName>
      <AppName>
        {name}
      </AppName>
    </Root>
  );
}
