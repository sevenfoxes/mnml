import { FC, useState } from "react";
import styled from "@emotion/styled";
import { Button } from "./Button";
import Icon from "@mdi/react";
import { mdiChevronRight, mdiFilter } from "@mdi/js";

const StyledButton = styled(Button)(() => {
  return {
    label: 'NestedListButton',
    alignItems: 'center',
    display: 'grid',
    gridTemplateColumns: '1fr auto',
    color: 'var(--black)',
    width: '100%',
    textAlign: 'left',
    minWidth: 300,
    minHeight: 45,
    borderRadius: 0,
    borderTop: '1px solid var(--light)',
    '&:focus-visible': {
      outline: '2px solid var(--blue)'
    },
    '&:first-of-type': {
      borderTop: 'none'
    },
    '& + *:not(&)': {
      borderTop: '1px solid var(--light)',
    }
  }
})

const IconArea = styled('span')(() => {
  return {
    alignItems: 'center',
    label: 'NestedListIconArea',
    display: 'flex',
    color: 'var(--blue)',
    gap: 2
  }
})

const Indicator = styled('span')(() => {
  return {
    color: '#838383'
  }
})

interface ChangePayload {
  id: string;
  value: string;
}

interface NestedListButtonProps {
  active?: boolean | string;
  children: any;
  icon?: string;
  onClick?: (p: ChangePayload) => void;
  id: string;
  action?: (p: ChangePayload, e: any) => void;
  disabled?: boolean;
  rotate?: boolean;
  indicatorText?: string;
}

export const NestedListButton: FC<NestedListButtonProps> = (props) => {

  const { active, children, indicatorText = false, icon, onClick, id, action, disabled, rotate = false } = props;

  const handleClick = (e) => {
    const p = { id, value: children }
    if (action) {
      return action(p, e)
    }
    onClick(p)
  }

  return (
    <StyledButton id={id} onClick={handleClick} disabled={disabled} >
      {children}
      <IconArea>
        {indicatorText && <Indicator>{indicatorText}</Indicator>}
        {active && <Icon path={mdiFilter} size={1} style={{ opacity: !action && .5, position: 'relative', transform: rotate && `rotate(90deg)` }} />}
        {icon && <Icon path={icon} size={1} />}
        {!action && <Icon path={mdiChevronRight} size={1} />}

      </IconArea>
    </StyledButton>
  )
}
