import { FC, useEffect } from "react";
import styled from "@emotion/styled";
import { Grid } from "primitives/Grid";
import { Header } from "primitives/Header";
import { useDimensions } from "utils/hooks/useDimensions";
import { SignedOutModal } from "primitives/Modal/SignedOutModal";
import { useSetRecoilState } from "recoil";
import { modalSelector } from "primitives/Modal/modalState";
import { modal } from "primitives/Modal/modalIds";

export type PageProps = {
  children: any;
  showFooter?: boolean;
  title?: string;
  devMode?: boolean;
  columns?: string;
  rows?: string;
  gap?: string;
  scrollable?: boolean;
  className?: string;
}

const Root: any = styled(Grid)(({ scrollable }: any) => {
  const { state } = useDimensions('header');

  return {
    // overflow: scrollable ? 'auto' : 'hidden',
    // height: `calc(100% - ${state.height}px)`,
    padding: '1rem',
    label: 'primitivePage',
    a: {
      color: 'var(--black)',
      textDecoration: 'none',
      "&:hover": {
        textDecoration: 'underline'
      }
    }
  }
});

export const Page: FC<PageProps> = (props) => {
  const { className, columns = '200px 1fr', rows, gap = 10, children, scrollable = true } = props;
  const isAuthenticated = true
  const openModal = useSetRecoilState(modalSelector(modal.signout))

  useEffect(() => {
    if (!isAuthenticated) {
      openModal(true)
    }
  }, [isAuthenticated])

  return (
    <>
      <Header />
      <Root className={className} columns={columns} gap={gap} rows={rows} scrollable={scrollable}>
        {isAuthenticated && children}
      </Root>
      <SignedOutModal />
    </>
  );
}
