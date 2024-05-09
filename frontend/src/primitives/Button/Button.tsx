import styled from "@emotion/styled";
import { FC, MouseEventHandler, ReactNode, useEffect, useState } from "react";
import { SerializedStyles } from "@emotion/react";
import { Size } from "models/Stylable.model";

export interface ButtonProps {
  children: ReactNode;
  type?: any;
  onClick: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  disabled?: boolean;
  size?: Size;
  ref?: any;
  sx?: SerializedStyles;
  color?: string;
  id?: string;
  'data-testid'?: string;
}

const Root: any = styled('button')(({ size, fontSize, sx }: any) => {
  const s = size === Size.small
  return {
    label: 'PrimitiveButton',
    background: 'transparent',
    color: 'var(--white)',
    display: 'block',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    border: 'none',
    padding: s ? '.3rem' : '.6rem',
    borderRadius: 3,
    textAlign: 'center',
    fontSize,
    cursor: 'pointer',
    textTransform: 'capitalize',
    whiteSpace: 'nowrap',
    ...sx,
    '&:disabled': {
      opacity: '.5',
      cursor: 'default'
    }
  }
})


export const Button: FC<ButtonProps> = (props) => {
  const { children, type, onClick, className, size, sx, disabled, ...p } = props;
  const [fontSize, setFontsize] = useState('.9rem')
  useEffect(() => {
    if (size === Size.large) {
      setFontsize('1.2rem')
    }
    if (size === Size.small) {
      setFontsize('.8rem')
    }
  }, [])

  return (
    <Root {...p} data-testid={`button-${p['data-testid'] || p.id}`} size={size} fontSize={fontSize} type={type} className={className} onClick={onClick} sx={sx} disabled={disabled}>
      {children}
    </Root>
  );
}
