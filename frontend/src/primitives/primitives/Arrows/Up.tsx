import { styled } from "utils";
import { FC } from "react";
import { Button } from "../Button";

export type UpProps = {
  children?: string;
  className?: string;
  component?: string;
  sx?: {};
}

const Root = styled(Button)(({ }: any) => ({

}));

export const Up: FC<UpProps> = (props) => {
  const {
    className,
    children,
    component = 'button',
    sx,
    ...rest
  } = props;

  return (
    <Root as={component} className={className} sx={sx} {...rest}>
      {children}
    </Root>
  )
}
