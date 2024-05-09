// theme utility functions
export const bp = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200
}
export const breakpoints = Object.values(bp)
export const mq = (n: number) => `@media (min-width: ${n < breakpoints.length ? breakpoints[n] : n}px)`
export const partialClass = (c: string) => `[class*="${c}"] &`
export const cq = (n: string) => `@container (min-width: ${n})`
