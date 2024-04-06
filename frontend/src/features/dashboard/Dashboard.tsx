import { DiceRoller } from "primitives/DiceRoller"
import { Page } from "primitives/Page"

export const Dashboard = () => {
  return (
    <Page
      title="Dashboard"
    >
      <DiceRoller advanced />
    </Page>
  )
}
