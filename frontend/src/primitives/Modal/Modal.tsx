import styled from "@emotion/styled";
import { FC } from "react";
import { createPortal } from 'react-dom';
import { useRecoilState, useResetRecoilState } from "recoil";
import { modalSelector } from "./modalState";
import { ActionButton, OutlineButton } from "primitives/Button";
import { useOnClickOutside } from "utils/hooks/useOnClickOutside";
import { ModalBg, ModalCard, ModalCloseButton, ModalHeader, ModalTitle } from "primitives/Card";

const Content = styled('main')(({ contentPadding }: any) => ({
  label: 'primitiveModalContent',
  overflowY: 'auto',
  padding: contentPadding,
  fontSize: 12,
  '& > *:first-of-type': {
    marginTop: 0
  },
  '::-webkit-scrollbar': {
    width: 3
  },
  '::-webkit-scrollbar-track': {
    background: '#eee'
  },
  '::-webkit-scrollbar-thumb': {
    background: '#aaa',
    borderRadius: 3,
  }
}))

const Footer = styled('footer')(({ noAction, hasFooter }: any) => {
  let cols = !noAction ? '1fr' : '1fr 1fr'

  if (hasFooter) {
    cols = `${cols} 1fr`
  }

  return ({
    label: 'primitiveModalFooter',
    borderTop: '1px solid #ccc',
    padding: '1rem',
    display: 'grid',
    gridTemplateColumns: cols,
    justifyItems: !noAction && 'center',
    gap: hasFooter ? '1rem' : '2rem',
    '& > button': {
      maxWidth: !noAction && '60%',
      minWidth: !noAction && '40%'
    }
  })
})

const ModalSubHeader = styled('div')(() => ({
  label: 'primitiveModalSubHeader',
  borderBottom: `1px solid var(--light)`,
  padding: '1rem',
  display: 'grid',
  gap: '1rem'
}))

interface ModalProps {
  noAction?: boolean;
  children: any;
  subHeader?: any;
  id: string;
  title: string;
  action?: (e) => void;
  actionDisabled?: boolean;
  actionText?: string;
  onClose?: (e) => void;
  resetOnUnmount?: boolean;
  closable?: boolean;
  secondaryActionDisabled?: boolean;
  secondaryActionText?: string;
  secondaryAction?: (e) => void;
  contentPadding?: string | number;
  disableClickOutside?: boolean;
  footer?: any;
}

export const Modal: FC<ModalProps> = (props) => {
  const [open, setOpen] = useRecoilState(modalSelector(props.id))
  const resetModal = useResetRecoilState(modalSelector(props.id))

  const {
    noAction = false,
    secondaryActionText = 'cancel',
    secondaryAction,
    children,
    title,
    action,
    onClose,
    id,
    closable = true,
    contentPadding = '1rem',
    actionText = 'ok',
    actionDisabled = false,
    secondaryActionDisabled = false,
    subHeader,
    disableClickOutside = false,
    footer
  } = props;

  const ref = useOnClickOutside(() => {
    !disableClickOutside && setOpen(false)
  });

  const handleCloseModal = (e) => {
    !!onClose && onClose(e)
    resetModal()
  }

  const handleAction = (e) => {
    e.stopPropagation()
    action(e)
    handleCloseModal(e)
  }

  const handleSecondaryAction = (e) => {
    e.stopPropagation()
    !!secondaryAction && secondaryAction(e)
  }

  return (
    open && createPortal(
      <ModalBg>
        <ModalCard data-testid={`modal-${id}`} ref={ref} hasSubheader={!!subHeader} full>
          <ModalHeader>
            <ModalTitle>{title}</ModalTitle>
            {!!closable && <ModalCloseButton onClick={handleCloseModal} />}
          </ModalHeader>
          {!!subHeader && (
            <ModalSubHeader>
              {subHeader}
            </ModalSubHeader>
          )}
          <Content contentPadding={contentPadding} >
            {children}
          </Content>
          <Footer hasFooter={!!footer} noAction={!noAction}>
            {<OutlineButton id={'modal-secondary'} onClick={handleSecondaryAction} disabled={secondaryActionDisabled}>{secondaryActionText}</OutlineButton>}
            {!noAction && <ActionButton id={'modal-primary'} onClick={handleAction} disabled={actionDisabled}>{actionText}</ActionButton>}
            {footer}
          </Footer>
        </ModalCard>
      </ModalBg>,
      document.body
    )
  )
}
