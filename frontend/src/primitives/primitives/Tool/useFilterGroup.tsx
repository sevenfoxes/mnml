import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import { filterGroupSelector, filterGroupState, filterSelector } from "./filterState"
import { uniq } from "lodash/fp"
import { useEffect } from "react"

export const useFilterGroup = (group: string, filterId: string) => {
  const addToGroup = useSetRecoilState(filterGroupState(group))
  const data = useRecoilValue(filterGroupSelector(group))
  const [filterData, setFilter] = useRecoilState(filterSelector(filterId))

  useEffect(() => {
    addToGroup(p => uniq([...p, filterId]))
  }, [])

  return { group: data, ...filterData, setFilter }
}

export const useRegisterFilter = (group: string, fields: string[]) => {
  const addToGroup = useSetRecoilState(filterGroupState(group))
  const data = useRecoilValue(filterGroupSelector(group))

  useEffect(() => {
    addToGroup(p => uniq([...p, ...fields]))
  }, [])

  return data
}

export const useFilterGroupData = (group: string) => {
  const data = useRecoilValue(filterGroupSelector(group))

  return data
}
