import { fieldSelector } from "primitives/Field"
import { Modal } from "primitives/Modal"
import { FC, useEffect } from "react"
import { useTranslation } from 'react-i18next'
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import { modal } from "./modalIds"
import { modalSelector } from "./modalState"

interface SignedOutModalProps {

}

export const SignedOutModal: FC<SignedOutModalProps> = () => {
  const { t } = useTranslation()
  const setModal = useSetRecoilState(modalSelector(modal.signout))
  const authenticated = true

  useEffect(() => {
    if (authenticated) {
      setModal(false)
    } else {
      setModal(true)
    }
  }, [authenticated])

  return (
    <Modal
      id={modal.signout}
      title={t('Signed out')}
      action={() => null}
      actionText={t('Login')}
      actionDisabled={false}
      secondaryActionDisabled={false}
      secondaryAction={() => null}
      secondaryActionText={`Token ${t('Login')}`}
      subHeader={t('You have been signed out')}
    >
      login form
    </Modal>
  )
}
