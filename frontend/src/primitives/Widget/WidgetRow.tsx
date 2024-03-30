import styled from "@emotion/styled";
import { mq } from "utils/standard/mq";

enum StatusColors {
  New = 'var(--secondary)',
  Reassigned = 'var(--reassigned)'
}

export const WidgetTicketRow = styled('div')(() => ({
  display: 'grid',
  gridTemplateRows: 'auto auto auto',
  alignItems: 'center',
  gap: `0 8px`,
  borderBottom: '1px solid var(--light)',
  padding: '.5rem',
  label: 'WidgetTicketRow',
  '&:last-child': {
    borderBottom: 'none'
  },
  [mq(1030)]: {
    gridTemplateColumns: '1fr auto',
    '& button': {
      gridColumn: 2
    }
  }
}))

export const TicketStatus = styled('div')(({ status }: any) => ({
  label: 'WidgetRowTicketStatus',
  color: StatusColors[status],
  paddingLeft: 5
}))

export const WidgetData = styled('span')(() => ({
  label: 'WidgetRowTicketData',
  color: 'rgb(142,142,142)',
}))
