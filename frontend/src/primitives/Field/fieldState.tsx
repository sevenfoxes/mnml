import { formsState } from "primitives/Form";
import { atomFamily, selectorFamily } from "recoil";

export const fieldState = atomFamily({
  key: 'fieldState',
  default: ''
})

export const fieldErrorState = atomFamily({
  key: 'fieldErrorState',
  default: ''
})

export const fieldValidationState = atomFamily({
  key: 'fieldValidationState',
  default: null
})

export const fieldTouchedState = atomFamily({
  key: 'fieldTouchedState',
  default: false
})

export const fieldRequiredState = atomFamily({
  key: 'fieldRequiredState',
  default: false
})

export const fieldSchemaState = atomFamily({
  key: 'fieldSchemaState',
  default: null
})

interface FieldInterface {
  valid?: boolean;
  value?: any;
  touched?: boolean;
  schema?: any;
  error?: string;
}

export const fieldSelector = selectorFamily({
  key: 'fieldSelector',
  get: (key: string) => ({ get }): FieldInterface => {
    return {
      value: get(fieldState(key)),
      valid: get(fieldValidationState(key)),
      touched: get(fieldTouchedState(key)),
      schema: get(fieldSchemaState(key)),
      error: get(fieldErrorState(key))
    }
  },
  set: (key: string) => ({ set, reset }, payload) => {
    if (payload) {
      const { schema, valid, value, touched, error } = payload as FieldInterface

      typeof value !== 'undefined' && set(fieldState(key), value)
      typeof error !== 'undefined' && set(fieldErrorState(key), error)
      typeof schema !== 'undefined' && set(fieldSchemaState(key), schema)
      typeof valid !== 'undefined' && set(fieldValidationState(key), valid)
      typeof touched !== 'undefined' && set(fieldTouchedState(key), touched)

    } else {
      reset(fieldState(key))
      reset(fieldErrorState(key))
      reset(fieldSchemaState(key))
      reset(fieldValidationState(key))
      reset(fieldTouchedState(key))
    }
  }
})

export const fieldsSelector = selectorFamily({
  key: 'fieldsSelector',
  get: (formId: string) => ({ get }) => {
    return get(formsState(formId))
      .reduce((a: any, field: any) => {
        const { value, schema, touched, valid, error } = get(fieldSelector(field))

        return [
          ...a,
          {
            valid,
            error,
            field,
            value,
            schema,
            touched
          }
        ]
      }, [])
  }
})
