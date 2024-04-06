import styled from "@emotion/styled";
import { FC, useEffect } from "react";
import { createPortal } from 'react-dom';
import { useRecoilState, useResetRecoilState } from "recoil";
import { alertSelector } from "./alertState";
import { ActionButton } from "primitives/Button";
import { useOnClickOutside } from "utils/hooks/useOnClickOutside";
import { ModalBg, ModalCard, ModalHeader, ModalTitle } from "primitives/Card";
import { useTranslation } from "react-i18next";

const Content = styled('main')(() => ({
  label: 'AlertContent',
  padding: '1rem',
  textAlign: 'center',
  '& > *:first-of-type': {
    marginTop: 0
  }
}))

const Footer = styled('footer')(() => ({
  label: 'AlertFooter',
  padding: '1rem',
  display: 'grid',
  alignItems: 'center',
  justifyContent: 'center',
  '& > *': {
    minWidth: 200
  }
}))

interface ModalProps {
  id: string;
}

export const Alert: FC<ModalProps> = (props) => {
  const [{ open, msg, title, buttonText }, updateAlert] = useRecoilState(alertSelector(props.id))
  const resetModal = useResetRecoilState(alertSelector(props.id))
  const { t } = useTranslation()

  const ref = useOnClickOutside(() => {
    updateAlert({ open: false })
  });

  useEffect(() => {
    return resetModal
  }, [])

  return (
    open && createPortal(
      <ModalBg>
        <ModalCard ref={ref} full>
          <ModalHeader>
            <ModalTitle>{title}</ModalTitle>
          </ModalHeader>
          <Content >
            {msg}
          </Content>
          <Footer>
            <ActionButton onClick={() => updateAlert({ open: false })}>{buttonText || t('OK')}</ActionButton>
          </Footer>
        </ModalCard>
      </ModalBg>,
      document.body
    )
  )
}
