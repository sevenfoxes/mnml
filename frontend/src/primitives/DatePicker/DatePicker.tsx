import { FC, useEffect } from "react";
import { Button } from "../Button";
import { H } from "../H";
import { Icon } from "../Icon";
import { mdiChevronDoubleLeft, mdiChevronDoubleRight, mdiChevronLeft, mdiChevronRight } from "@mdi/js";
import { useRecoilState } from "recoil";
import { datePickerState } from "./datePickerState";
import { addDays, setYear, startOfDay, format, getDaysInMonth, setDate, setMonth, isBefore, subYears } from "date-fns/fp";
import styled from "@emotion/styled";

interface DatePickerProps {
  className?: 'string';
  handleClose: (v: any) => void;
  index: string;
  disablePast?: boolean;
  prevDate?: Date;
  updateOnMount?: boolean;
}

const Root = styled('div')(() => ({
  borderRadius: '3px',
  padding: '.5rem',
  background: 'white',
}))

const Head = styled('div')(() => ({
  display: 'grid',
  gridTemplateColumns: 'min-content min-content 1fr min-content min-content',
  gap: 4,
  alignItems: 'center',
  marginBottom: 5
}))

const Days = styled('div')(() => {
  return {
    display: 'grid',
    gap: 3,
    gridTemplateColumns: 'repeat(7, 1fr)',
    gridTemplateRows: 'repeat(6, 1fr)'
  }
})

const DayName = styled('div')(() => {
  return {
    fontSize: '.8rem',
    textAlign: 'center',
    alignContent: 'center',
    padding: 5,
    borderRadius: 2,
    height: 20
  }
});

const OffsetDay = styled('div')(() => {
  return {
    background: '#fbfbfb'
  }
});

const Day = styled(Button)(({ active, disabled }: any) => {
  return {
    color: active ? 'white' : '#333',
    fontSize: '.8rem',
    background: active ? 'var(--blue)' : '#eee',
    textAlign: 'center',
    padding: 0,
    height: 30,
    transition: 'all .2s',
    opacity: disabled && .5,
    '&:hover, &:focus': {
      cursor: disabled && 'default',
      background: !disabled && !active && "var(--blue-very-light)",
    }
  }
})

const NavButton = styled(Button)(({ disabled }: any) => {
  return {
    height: 24,
    background: 'transparent',
    padding: 0,
    color: 'var(--blue)',
    opacity: disabled && .5
  }
})
const NavButtonYear = styled(Button)(({ disabled }: any) => {
  return {
    height: 24,
    background: 'transparent',
    padding: 0,
    color: 'var(--blue)',
    opacity: disabled && .5
  }
})

export const DatePicker: FC<DatePickerProps> = ({ className, handleClose, index, disablePast = false, prevDate, updateOnMount = false }) => {
  const days = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun']
  const [stateDate, updateStateDate] = useRecoilState(datePickerState(index));
  const now = startOfDay(new Date())
  const d = stateDate || (prevDate ? addDays(1)(prevDate) : now)
  const date = format('d-LLLL-L-y')(d).split('-')
  const isInPast = (t) => isBefore(now)(t)

  useEffect(() => {
    updateOnMount && !stateDate && updateStateDate(d)
  }, [!stateDate])

  const handleSetDay = (di: number) => {
    updateStateDate(setDate(di)(d))
    handleClose(setDate(di)(d))
  }

  const handleSetMonth = (m: number) => {
    updateStateDate(setMonth(m)(d))
  }

  const handleSetYear = (y: number) => {
    updateStateDate(setYear(y)(d))
  }

  return (
    <Root data-testid={index} className={className}>
      <Head>
        <NavButtonYear
          disabled={disablePast && isInPast(subYears(1)(d))}
          onClick={() => handleSetYear(Number(date[3]) - 1)}
        >
          <Icon path={mdiChevronDoubleLeft} size={1} />
        </NavButtonYear>
        <NavButton
          disabled={disablePast && isInPast(d)}
          onClick={() => handleSetMonth(Number(date[2]) - 2)}
        >
          <Icon path={mdiChevronLeft} size={1} />
        </NavButton>
        <H sx={{ margin: 0, fontSize: 16, textAlign: 'center' }}>{date[1]} {date[3]}</H>
        <NavButton onClick={() => handleSetMonth(Number(date[2]))}>
          <Icon path={mdiChevronRight} size={1} />
        </NavButton>
        <NavButtonYear onClick={() => handleSetYear(Number(date[3]) + 1)}>
          <Icon path={mdiChevronDoubleRight} size={1} />
        </NavButtonYear>
      </Head>
      <Days>
        {days.map((d, i) => (<DayName key={i}>{d}</DayName>))}
        {Array?.from({ length: Number(format('i')(d)) - 1 }).map((_, i) => (<OffsetDay key={i}>&nbsp;</OffsetDay>))}
        {date && Array
          .from({ length: getDaysInMonth(d) }, (_, i) => (i + 1))
          .map((s, i) => (<Day
            id={'day'}
            disabled={disablePast && isInPast(setDate(i + 1)(d))}
            active={s === Number(date[0])}
            onClick={() => handleSetDay(s)}
            key={i}>{s}</Day>
          ))}
      </Days>
    </Root>
  )
}
