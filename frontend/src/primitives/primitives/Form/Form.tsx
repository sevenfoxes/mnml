import { useEffect, type FC, type ReactNode } from "react";
import type { AnyObjectSchema } from "yup";
import styled from "@emotion/styled";
import { FormContext } from "./FormContext";
import { FormErrors } from "./FormErrors";
import { useSetRecoilState } from "recoil";
import { formConfigState } from ".";

export interface FormProps {
  children: ReactNode;
  className?: string;
  editing?: boolean;
  schema?: AnyObjectSchema;
  sx?: object;
  id: string;
  prependId?: boolean;
  clearData?: boolean;
}

const Root: any = styled('div')(({ sx }: any) => ({
  label: 'PrimitiveForm',
  ...sx
}));

export const Form: FC<FormProps> = (props) => {
  const { children, className, id, prependId = false, clearData = true, sx } = props;
  const setConfig = useSetRecoilState(formConfigState(id))

  useEffect(() => {
    setConfig({
      prependId,
      clearData
    })
  }, [prependId, clearData])


  return (
    <FormContext.Provider value={id}>
      <Root sx={sx} className={className} id={id} test-id={id}>
        <FormErrors name={id} />
        {children}
      </Root>
    </FormContext.Provider>
  );
}
