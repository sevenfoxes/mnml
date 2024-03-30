import styled from "@emotion/styled";
import { FC } from "react";
import { Button, ButtonProps } from './Button';


const Root = styled(Button)(({ color }: any) => ({
  background: 'transparent',
  color,
  display: 'block',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  border: `1px solid ${color}`,
  label: 'PrimitiveOutlineButton'
}))


export const OutlineButton: FC<ButtonProps> = (props) => {
  const { children, type, onClick, className, color = 'var(--blue)', ...rest } = props;
  return (
    <Root {...rest} type={type} className={className} onClick={onClick} color={color}>
      {children}
    </Root>
  );
}
