import styled from "@emotion/styled";
import { FC } from "react";
import { Button, ButtonProps } from "./Button";
import Icon from "@mdi/react";
import { SerializedStyles } from "@emotion/react";

interface IconButtonProps extends ButtonProps {
  iconSize?: number | string;
  sx?: SerializedStyles;
  path: string;
  color?: string;
}

const StyledButton = styled(Button)(({ sx, color }: any) => ({
  label: 'PrimitiveIconButton',
  color,
  padding: 0,
  margin: 0,
  lineHeight: 0,
  ...sx
}))

export const IconButton: FC<IconButtonProps> = (props) => {
  const { iconSize = 1, path } = props;

  return (
    <StyledButton {...props}>
      <Icon path={path} size={iconSize} />
      <span className="hide">{props.children}</span>
    </StyledButton>
  )
}
