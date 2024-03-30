import styled from "@emotion/styled";
import { FC } from "react";
import { Button, ButtonProps } from "./Button";

interface ActionButtonProps extends ButtonProps {

}

const StyledButton = styled(Button)(({ disabled }) => ({
  label: 'ActionButton',
  background: 'linear-gradient(to right, var(--blue-green), var(--green))',
  color: `var(--white)`,
  '&:disabled': {
    opacity: .5
  }
}))

export const ActionButton: FC<ActionButtonProps> = (props) => {

  return <StyledButton {...props} />
}
