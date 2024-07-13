import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const UsernameList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Usernames"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="password" source="password" />
        <TextField label="firstName" source="firstName" />
        <TextField label="lastName" source="lastName" />
        <TextField label="username" source="username" />
        <TextField label="email" source="email" />
        <BooleanField label="isActive" source="isActive" />
      </Datagrid>
    </List>
  );
};
