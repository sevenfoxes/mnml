import { ButtonHTMLAttributes, FC } from "react";
import { mdiChevronDown, mdiChevronLeft, mdiChevronRight, mdiChevronUp } from "@mdi/js";
import Icon from "@mdi/react";
import styled from "@emotion/styled";

export enum Direction {
  up = 'up',
  down = 'down',
  left = 'left',
  right = 'right'
}

export type ArrowProps = ButtonHTMLAttributes<any> & {
  children?: string;
  className?: string;
  component?: string;
  sx?: {};
  direction?: Direction;
  active?: boolean;
}

const Root = styled('button')(({ direction, active, theme, sx }: any) => ({
  border: 'none',
  color: theme.button.color,
  padding: 0,
  background: 'transparent',
  overflow: 'hidden',
  width: 12,
  height: 12,
  display: 'block',
  position: 'relative',
  transition: 'all .2s',
  opacity: active ? 1 : .3,
  cursor: active && 'pointer',
  svg: {
    top: '50%',
    left: '50%',
    position: 'absolute',
    transform: 'translate(-50%, -50%)'
  },
  ...sx
}));

const Text = styled('span')(({ theme }: any) => ({
  opacity: '0',
  position: 'absolute',
}));

export const Arrow: FC<ArrowProps> = (props) => {
  const {
    className,
    children,
    direction = Direction.up,
    component = 'button',
    sx,
    ...rest
  } = props;

  const d = {
    up: mdiChevronUp,
    down: mdiChevronDown,
    left: mdiChevronLeft,
    right: mdiChevronRight
  }

  return (
    <Root as={component} className={className} sx={sx} {...rest}>
      <Icon path={d[direction]} size={1} />
      <Text>{children || Direction[direction]}</Text>
    </Root>
  )
}
