import { FC, useEffect } from "react"
import { useRecoilState, useSetRecoilState } from "recoil"
import { Field, FieldProps } from "./Field"
import { fieldSelector, fieldTouchedState } from "./fieldState"
import { isEmpty } from "lodash/fp"
import { Checkbox } from "primitives/Checkbox"
interface CheckboxField extends Omit<FieldProps, "children" | "initValue"> {
  initValue?: boolean;
}
export const CheckboxField: FC<CheckboxField> = (props) => {
  const { id, required = false, schema, label, initValue = false } = props
  const [{ value, valid, touched, error }, updateField] = useRecoilState(fieldSelector(id))
  const setTouched = useSetRecoilState(fieldTouchedState(id))
  const handleBlur = () => setTouched(true)
  const handleFieldUpdate = (e, v) => updateField({ value: v.value })
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

  return (
    <Field
      id={id}
      schema={schema}
      required={required}
    >
      <Checkbox
        {...props}
        value={value || initValue}
        label={label}
        onChange={handleFieldUpdate}
      />
    </Field>
  )
}
