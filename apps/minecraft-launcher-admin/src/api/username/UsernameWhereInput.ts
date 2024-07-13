import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type UsernameWhereInput = {
  id?: StringFilter;
  password?: StringNullableFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  username?: StringNullableFilter;
  email?: StringNullableFilter;
  isActive?: BooleanNullableFilter;
};
