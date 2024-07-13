import { SortOrder } from "../../util/SortOrder";

export type UsernameOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  password?: SortOrder;
  firstName?: SortOrder;
  lastName?: SortOrder;
  username?: SortOrder;
  email?: SortOrder;
  isActive?: SortOrder;
};
