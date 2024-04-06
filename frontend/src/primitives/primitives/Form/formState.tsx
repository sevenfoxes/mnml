import { uniq } from 'lodash/fp';
import { fieldsSelector } from 'primitives/Field';
import { atomFamily, selectorFamily } from 'recoil';
// import { queryClient } from 'services/localStorage.service';
import { AnyObjectSchema, ObjectSchema, object } from 'yup';
import { ObjectShape } from 'yup/lib/object';

export interface FormOptions {
  submitting: boolean;
  touched: boolean;
  dirty: boolean;
  onSubmit: (data: Event) => void;
  schema: AnyObjectSchema;
  errors: any;
  fields?: any;
}

export type FormUpdate = FormOptions & {
  fieldIndex: string;
  fieldValue: string;
}

export interface FieldUpdate {
  value: string;
  error: string;
  charCount: number;
  formIndex?: string;
}

/* field state */

// an array of all the forms registered
export const formsState = atomFamily({
  key: 'formsState',
  default: [] as string[]
});

export const formConfigState = atomFamily({
  key: 'formConfigState',
  default: {
    prependId: false,
    clearData: true
  }
})

export const formRestoreState = atomFamily({
  key: 'formRestoreState',
  default: null
})

export const formRestoreSelector = selectorFamily({
  key: 'formRestoreSelector',
  get: (formId: string) => ({ get }) => {
    return null
    // return get(formRestoreState(formId)) || queryClient.getQueryData([formId])
  },
  set: (formId: string) => ({ set }, payload) => {
    set(formRestoreState(formId), payload)

    return null
    // queryClient.setQueryData([formId], payload)
  }
})

export interface FormInterface<T extends ObjectShape> {
  fields: T;
  valid: T;
  schema: ObjectSchema<T>;
  schemas: T;
  formValid: boolean;
  touched: boolean;
}

export const formSelector = selectorFamily({
  key: 'formSelector',
  get: (formId: string) => <T extends ObjectShape>({ get }): FormInterface<T> => {
    const formFields = get(fieldsSelector(formId))

    const { fields, valid, schemas } = formFields
      .reduce((a, c) => ({
        ...a,
        fields: {
          ...a.fields,
          [c.field]: c.value
        },
        touched: {
          ...a.touched,
          [c.field]: c.touched
        },
        valid: {
          ...a.valid,
          [c.field]: c.valid
        },
        schemas: {
          ...a.schemas,
          [c.field]: c.schema
        },
      }), {});

    const haveSchema = formFields.filter(f => f.schema)
    const countWithValidSchemas = haveSchema.filter(f => f.valid).length

    return {
      fields,
      schemas,
      schema: object().shape(schemas),
      valid,
      formValid: !!countWithValidSchemas && countWithValidSchemas === haveSchema.length,
      touched: !!formFields.find(f => f.touched)
    }
  },
  set: (formId) => ({ set }, payload: any) => {
    set(formsState(formId), (p) => uniq([...p, payload]))
  }
})
