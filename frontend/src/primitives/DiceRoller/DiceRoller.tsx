import { FC, useState } from "react";
import styled from "@emotion/styled";
import { Card } from "primitives/Card";
import { Grid } from "primitives/Grid";
import { useQuery } from "utils/hooks/useQuery";
import { IconButton } from "primitives/Button";
import { mdiRefresh } from "@mdi/js";
import gql from 'graphql-tag';

interface DiceRollerProps {
  advanced?: boolean;
}

// grid is used often in MNML https://css-tricks.com/snippets/css/complete-guide-grid/
const Die = styled('div')(() => ({
  background: 'var(--light)',
  textAlign: 'center',
  placeItems: "center",
  padding: ".5rem",
  position: "relative",
  borderRadius: 3,
  '&:before': {
    content: "''",
    display: 'block',
    paddingBottom: "100%",
    gridArea: '1 / 1 / 2 / 2'
  }
}))

const Label = styled('div')(() => ({
  fontSize: 16,
  position: 'absolute',
  top: '50%',
  left: "50%",
  transform: "translate(-50%, -50%)",
  fontWeight: 'bold'
}))

const Field = styled(Grid)(() => ({
  fontSize: 16,
  textAlign: 'center',
  gridTemplateColumns: `repeat(auto-fill, minmax(50px, 1fr))`,
  gap: ".5rem",
}))

const q = gql`
  query Query($dice: Int, $sides: Int) {
    rollDice(dice: $dice, sides: $sides)
  }
`

export const DiceRoller: FC<DiceRollerProps> = (props) => {
  const { advanced } = props
  const [dice, setDice] = useState(3)
  const [sides, setSides] = useState(6)
  const placeholder = new Array(dice).fill("?")

  const { data, refetch, loading } = useQuery(q, {
    variables: {
      dice,
      sides
    }
  })

  const handleClick = (e) => {
    refetch({
      dice,
      sides
    })
  }


  return (
    <Card
      id={"DiceRoller"}
      title={"Roll dice"}
      tools={<IconButton onClick={handleClick} path={mdiRefresh}>Roll</IconButton>}
    >
      <Field>
        {loading && placeholder.map((d, i) => (
          <Die key={i}>
            <Label>{d}</Label>
          </Die>
        ))}
        {data && data.rollDice.map((d, i) => (
          <Die key={i}>
            <Label>{d}</Label>
          </Die>
        ))}
      </Field>
    </Card>
  )
}
