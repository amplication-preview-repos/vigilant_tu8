import { UsernameWhereInput } from "./UsernameWhereInput";
import { UsernameOrderByInput } from "./UsernameOrderByInput";

export type UsernameFindManyArgs = {
  where?: UsernameWhereInput;
  orderBy?: Array<UsernameOrderByInput>;
  skip?: number;
  take?: number;
};
