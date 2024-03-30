import { FC } from "react";
import MdiIcon from '@mdi/react';
import styled from "@emotion/styled";

interface IconProps {
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
