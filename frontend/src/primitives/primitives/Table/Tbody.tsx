import { FC, Children, useContext, useEffect } from "react";
import { Grid } from "../Grid";
import { useRecoilState } from "recoil";
import { TableContext, tableSelector } from "./tableState";
import { Tr } from "./Tr";
import { Td } from ".";
import styled from "@emotion/styled";


const Root = styled('tbody')(({ c }: any) => ({
}))

export const Tbody: FC<{ children: any }> = (props) => {
  return (
    <Root as={'tbody'} >
      {props.children}
    </Root>
  );
}
