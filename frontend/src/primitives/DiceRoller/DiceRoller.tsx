import { FC, useEffect } from "react";
import styled from "@emotion/styled";
import { Card } from "primitives/Card";
import { Grid } from "primitives/Grid";
import { useQuery } from '@apollo/client';
import { IconButton } from "primitives/Button";
import { mdiRefresh } from "@mdi/js";
import gql from 'graphql-tag';
import { Form } from "primitives/Form";
import { NumberField } from "primitives/Field/NumberField";
import { useRecoilState } from "recoil";
import { fieldSelector } from "primitives/Field";

interface DiceRollerProps {
  advanced?: boolean;
  sides?: number;
  dice?: number;
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

const Advanced = styled(Form)(() => ({
  fontSize: 16,
  textAlign: 'center',
  gap: ".5rem",
  display: 'grid',
  padding: '0 0 .5rem 0',
  gridTemplateColumns: '1fr 1fr',
  label: 'DiceRollerAdvanced'
}))

const q = gql`
  query Query($dice: Int, $sides: Int) {
    rollDice(dice: $dice, sides: $sides)
  }
`

export const DiceRoller: FC<DiceRollerProps> = (props) => {
  const id = "DiceRoller"
  const {
    advanced,
    sides: initSides = 6,
    dice: initDice = 6
  } = props

  const [{ value: dice }, setDice] = useRecoilState(fieldSelector('dice'))
  const [{ value: sides }, setSides] = useRecoilState(fieldSelector('sides'))
  const { data, refetch, loading } = useQuery(q, {
    variables: {
      dice,
      sides
    }
  })

  useEffect(() => {
    setDice({ value: initDice })
    setSides({ value: initSides })
  }, [])

  const placeholder = new Array(dice).fill("?")
  const output = loading && !data?.rollDice ? placeholder : data?.rollDice

  if (typeof dice !== 'number' || typeof sides !== 'number') return null;

  const handleClick = (e) => {
    refetch({
      dice,
      sides
    })
  }


  return (
    <Card
      id={id}
      title={"Roll dice"}
      tools={<IconButton onClick={handleClick} path={mdiRefresh}>Roll</IconButton>}
    >
      {advanced && (
        <Advanced id={id} >
          <NumberField initValue={dice} label={'Dice'} id={'dice'} />
          <NumberField initValue={sides} label={'Sides'} id={'sides'} />
        </Advanced>
      )}
      <Field>
        {output?.map((d, i) => (
          <Die key={i}>
            <Label>{d}</Label>
          </Die>
        ))}
      </Field>
    </Card>
  )
}
