import { FC } from "react";
import { Tr } from "./Tr";

export const Tfoot: FC<any> = (props) => {
  const { children } = props;
  return (
    <tfoot>
      <Tr>
        {children}
      </Tr>
    </tfoot>
  );
}
