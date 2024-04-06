import styled from "@emotion/styled"

export const SubHeaderTitle = styled('span')(() => ({
  label: 'PairTitle',
  fontWeight: 'normal',
  fontSize: 12,
  textAlign: 'center'
}))

export const SubHeaderData = styled('span')(() => ({
  label: 'PairData',
  textAlign: 'center',
  color: 'var(--grey)',
  fontSize: 12,
  wordBreak: 'break-word'
}))
