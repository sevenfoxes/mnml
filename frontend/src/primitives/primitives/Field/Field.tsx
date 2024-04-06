import styled from "@emotion/styled"
import { FormContext, formConfigState, formSelector } from "primitives/Form"
import { FC, ReactNode, useContext, useEffect } from "react";
import { useRecoilState, useRecoilStateLoadable, useRecoilValue } from "recoil"
import { fieldSelector } from "./fieldState";
import { isEmpty } from "lodash/fp";

const ValidIndicator: any = styled('div')(({ valid }: any) => {
  let background = `var(--blue)`

  if (valid) {
    background = 'var(--green)'
  }

  if (!valid && typeof valid === 'boolean') {
    background = 'var(--danger)'
  }

  return {
    label: 'FieldValidIndicator',
    background,
    height: '100%',
    width: 3,
    span: {
      position: 'absolute',
      left: -999,
      visibility: 'hidden',
    }
  }
})


export interface FieldProps<T> {
  id: string;
  children: ReactNode;
  schema?: any;
  retain?: boolean;
  initValue: T;
  showFieldIndicator?: boolean;
  required?: boolean;
  label?: string;
}

export const Field = <T,>(props: FieldProps<T>) => {
  const { children, id, schema, initValue = '', retain = false, showFieldIndicator = true } = props
  const formId = useContext(FormContext)
  const [f, addField] = useRecoilStateLoadable(formSelector(formId))
  const { prependId, clearData } = useRecoilValue(formConfigState(formId))
  const fullId = prependId ? `${formId}_${id}` : id
  const [{ value, valid, touched, error }, updateField] = useRecoilState(fieldSelector(fullId))

  useEffect(() => {
    if (!error) {
      const validate = async () => {
        const d = await schema.validate(value).catch(() => updateField({ valid: false }))

        !!d && !isEmpty(d) ? updateField({ valid: true }) : updateField({ valid: false })
      }

      touched && schema && validate()
      updateField({ schema })
    }
    error && updateField({ error: '' })


  }, [value, touched])

  useEffect(() => {
    addField(id)

    return () => {
      if (clearData && !retain) {
        updateField(null)
      }
    }

  }, [])

  useEffect(() => {
    initValue && updateField({ value: initValue })

  }, [initValue])

  return (
    <>
      {children}
      {showFieldIndicator && <ValidIndicator valid={valid}><span>{!!valid ? 'valid' : 'invalid'}</span></ValidIndicator>}
    </>
  )
}
