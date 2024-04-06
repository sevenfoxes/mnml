import styled from "@emotion/styled";
import { mdiClose } from "@mdi/js";
import Icon from "@mdi/react";
import { FC } from "react";

export const ModalCard: any = styled('div')(({ state, width, hasSubheader, full }: any): any => {
  const base = {
    gridTemplateRows: hasSubheader ? 'auto auto 1fr auto' : 'auto 1fr auto',
    background: 'var(--white)',
    borderRadius: 3,
    boxShadow: `var(--shadow-default)`,
    display: 'grid',
    placeSelf: 'center',
    width: width || '50vw',
    minHeight: '20vh',
    maxHeight: '85vh',
    minWidth: 430,
    label: 'ModalCard'
  }

  if (full) return base

  return {
    ...base,
    position: 'fixed',
    left: state?.x || '-100vw',
    top: state?.y,
  }
})

export const ModalHeader = styled('header')(({ leftTools }: any) => ({
  alignItems: 'center',
  color: 'var(--white)',
  padding: '.5rem 1rem',
  display: 'grid',
  gridTemplateColumns: leftTools ? 'auto 1fr auto' : '1fr auto',
  background: 'var(--blue)',
  gap: `0 5px`,
  borderRadius: '3px 3px 0 0',
  textAlign: 'center',
  fontSize: 14,
  label: 'ModalHeader'
}))

const CloseButton = styled('button')(() => ({
  lineHeight: 0,
  cursor: 'pointer',
  color: 'var(--white)',
  background: 'transparent',
  border: 'none',
  paddingRight: 0
}))

export const ModalTitle = styled('h1')(() => ({
  padding: 0,
  margin: 0,
  fontWeight: 'normal',
  fontSize: 14,
  textTransform: 'capitalize'
}))

export const ModalBg = styled('div')(() => ({
  background: 'rgba(0, 0, 0, .5)',
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  display: 'grid',
}))

interface ModalCloseButtonProps {
  onClick: (e) => void;
  disabled?: boolean;
}

export const ModalCloseButton: FC<ModalCloseButtonProps> = (props) => {
  const { onClick, disabled = false, ...r } = props
  return (
    <CloseButton onClick={onClick} disabled={disabled} {...r}>
      <Icon path={mdiClose} size={.9} />
    </CloseButton>
  )
}
