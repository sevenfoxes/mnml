import styled from "@emotion/styled";
import { FC, ReactNode } from "react";
import { NavLink } from "react-router-dom";

interface LinkProps {
  children: ReactNode;
  href: any;
  className?: any;
}

const Root: FC<Partial<LinkProps>> = styled(NavLink)(() => {

  return ({
    label: 'primitiveLink',
    textDecoration: 'none',
    '&:hover': {
    }
  })
})

export const Link: FC<LinkProps> = (props) => {
  const { children, href } = props;

  if (!href) {
    return null;
  }

  return (
    <Root {...props}>{children}</Root>
  );
};
