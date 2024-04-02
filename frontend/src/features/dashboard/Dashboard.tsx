import { DiceRoller } from "primitives/DiceRoller/DiceRoller"
import { Header } from "primitives/Header"
import { Page } from "primitives/Page"

export const Dashboard = () => {
  return (
    <Page
      title="Dashboard"
    >
      <DiceRoller />
    </Page>
  )
}
