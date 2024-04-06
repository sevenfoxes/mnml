import styled from "@emotion/styled";
import { FC } from "react";

interface NavProps {

}

const Root = styled('nav')(() => {
  return {
    background: 'var(--blue-light)',
    color: 'var(--white)',
    padding: '.5rem 1rem',
  }
})

// TODO: react-router list of pages
export const Nav: FC<NavProps> = () => {
  return (
    <Root>
      Nav Here
    </Root>
  )
}
