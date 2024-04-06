import { FC } from "react";
import { Tr } from "./Tr";
import styled from "@emotion/styled";

const StyledThead = styled('thead')(({ theme }: any) => ({
  background: 'var(--blue-extra-light)',
  borderBottom: '1px solid var(--light)'
}))

export const Thead: FC<any> = (props) => {
  const { children, className } = props;
  return (
    <StyledThead className={className}>
      <Tr header>
        {children}
      </Tr>
    </StyledThead>
  );
}
