import { Alert } from "./Alert"
import { FC } from "react"

interface AppAlertProps {

}

export const AppAlert: FC<AppAlertProps> = () => {

  return (
    <Alert id={'appAlert'} />
  )
}
