import { isEmpty } from "lodash/fp";
import { atomFamily, selectorFamily } from "recoil";

export enum FilterType {
  string = 'string',
  array = 'array',
  object = 'object',
  boolean = 'boolean',
}

export interface Filter<T> {
  active?: boolean;
  current?: string;
  value?: T;
  prev?: any[];
  back?: string;
  type?: FilterType;
  id?: string;
}

export const filterValueState = atomFamily({
  key: 'filterValueState',
  default: '' as any
})

export const filterTypeState = atomFamily({
  key: 'filterTypeState',
  default: FilterType.string
})

export const filterPrevState = atomFamily({
  key: 'filterPrevState',
  default: []
})

export const filterNavigationState = atomFamily({
  key: 'filterNavigationState',
  default: ''
})

export const filterGroupState = atomFamily({
  key: 'filterGroupState',
  default: []
})

export const filterSelector = selectorFamily({
  key: 'filterSelector',
  get: (key: string) => ({ get }): Filter<any> => {
    const value = get(filterValueState(key))
    const type = get(filterTypeState(key));
    let active = undefined

    if (type === FilterType.string) {
      active = !!value
    }

    if (type === FilterType.array) {
      active = !!value.length
    }

    if (type === FilterType.object) {
      active = !isEmpty(value)
    }

    if (type === FilterType.boolean) {
      active = typeof value === 'boolean'
    }

    const payload = {
      value,
      current: get(filterNavigationState(key)),
      prev: get(filterPrevState(key)),
      active,
      type
    }

    return payload
  },
  set: (key: string) => ({ set }, payload: Partial<Filter<any>>) => {
    if (payload.type) {
      payload.type === FilterType.array && set(filterValueState(key), [])
      payload.type === FilterType.boolean && set(filterValueState(key), null)
      payload.type === FilterType.object && set(filterValueState(key), {})

      return set(filterTypeState(key), payload.type)
    }

    if (payload.back || payload.back === '') {
      set(filterPrevState(key), (p) => {
        return p.filter(v => v !== p[p.length - 1])
      })
      return set(filterNavigationState(key), payload.back)
    }

    if (payload.current) {
      set(filterNavigationState(key), (p) => {
        set(filterPrevState(key), (fp) => [...fp, p])
        return p ? `${p}.${payload.current}` : payload.current
      })
    }

    if (payload.value || payload.value === false) {
      set(filterValueState(key), payload.value)
    }
  }
})


export const filterResetSelector = selectorFamily({
  key: 'filterResetSelector',
  get: (key: string) => ({ get }): Partial<Filter<any>> => {
    return get(filterSelector(key))
  },
  set: (key: string) => ({ get, set, reset }) => {
    const s = filterValueState(key)
    const v = get(s)

    reset(filterPrevState(key))
    reset(filterNavigationState(key))

    if (typeof v === 'string') {
      reset(s)
    }

    if (typeof v === 'boolean') {
      set(s, false)
    }

    if (!!v?.length && typeof v !== 'string') {
      set(s, [])
    }

  }
})

interface FilterGroupSelector {
  active: boolean;
  atRoot: boolean;
  filter: Filter<string>
  filters: Filter<string>[]
}

export const filterGroupSelector = selectorFamily({
  key: 'filterGroupSelector',
  get: (group: string) => ({ get }): FilterGroupSelector => {
    const filterIds = get(filterGroupState(group))
    const filters = filterIds.map((id) => {
      return {
        ...get(filterSelector(id)),
        id
      }
    })

    const filter = filters.find(f => f.current);

    return {
      filters,
      filter,
      active: !!filters.find(f => f.active),
      atRoot: !filter
    }
  },
  set: (group: string) => ({ get, reset }) => {
    const filterIds = get(filterGroupState(group))
    filterIds.map((id) => {
      return reset(filterResetSelector(id))
    })
  }
})
