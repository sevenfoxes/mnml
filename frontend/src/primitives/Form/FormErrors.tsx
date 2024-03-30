import { FC } from "react";
import styled from "@emotion/styled";
import { uniq } from "lodash/fp";

interface FormErrorProps {
  name: string;
}

const Root = styled('div')(() => ({
  border: `1px solid var(--danger)`,
  borderRadius: '1rem',
  color: `var(--danger)`,
  padding: '1rem',
  label: 'PrimitiveFormErrors'
}));

const List = styled('ul')(() => ({
  listStyleType: 'disc',
  label: 'PrimitiveFormErrorsList'
}));

const Text = styled('li')(() => ({
  fontSize: 13,
  gap: '1rem',
  marginLeft: '1.5rem',
  label: 'PrimitiveFormErrorsText'
}));

export const FormErrors: FC<FormErrorProps> = (props) => {
  const { name } = props;
  return null
  // const { errors } = useForm(name);

  // if (!errors?.length) return null;

  return (
    <Root>
      <List>
        {uniq(errors.map((error, i) => (
          <Text key={i}>
            {error.message}
          </Text>
        )))}
      </List>
    </Root>
  );
};
