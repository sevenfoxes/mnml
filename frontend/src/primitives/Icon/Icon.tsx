import { FC } from "react";
import MdiIcon from '@mdi/react';
import styled from "@emotion/styled";
import { StatelessPrimitiveProps } from "models/Primitive.model";

interface IconProps extends StatelessPrimitiveProps {
  path: string;
  size?: number;
  className?: string;
}

const Root = styled(MdiIcon)(() => ({
  pointerEvents: 'none'
}))

export const Icon: FC<IconProps> = (props) => {
  const { size = 1 } = props;
  return <Root {...props} size={size} />
}
