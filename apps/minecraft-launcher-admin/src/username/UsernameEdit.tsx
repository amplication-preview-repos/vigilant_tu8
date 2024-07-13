import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
} from "react-admin";

export const UsernameEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="password" source="password" />
        <TextInput label="firstName" source="firstName" />
        <TextInput label="lastName" source="lastName" />
        <TextInput label="username" source="username" />
        <TextInput label="email" source="email" type="email" />
        <BooleanInput label="isActive" source="isActive" />
      </SimpleForm>
    </Edit>
  );
};
