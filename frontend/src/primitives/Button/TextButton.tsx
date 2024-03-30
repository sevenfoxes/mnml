import styled from "@emotion/styled";
import { FC } from "react";
import { Button, ButtonProps } from './Button';

export interface TextButtonProps extends ButtonProps { }

const Root = styled(Button)(({ color }: any) => ({
  background: 'transparent',
  border: `none`,
  label: 'PrimitiveTextButton'
}))


export const TextButton: FC<TextButtonProps> = (props) => {
  const { children, type, onClick, color = 'var(--blue)', ...rest } = props;
  return (
    <Root {...rest} type={type} onClick={onClick} color={color}>
      {children}
    </Root>
  );
}
