import { CustomMatcher, TableMatcher } from "."

const date: CustomMatcher<Date> = (d: Date) => d.toDateString()
const string: CustomMatcher<string> = (d: string) => d
const number: CustomMatcher<number> = (n: number) => `${n}`

export const useMatchers: (m: TableMatcher | string) => any = (m) => {
  const match: { [s: string]: CustomMatcher<any> } = {
    date,
    string,
    number,
  }

  return match[m] as CustomMatcher<any>
}
