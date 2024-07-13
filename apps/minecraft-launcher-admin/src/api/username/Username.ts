export type Username = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  password: string | null;
  firstName: string | null;
  lastName: string | null;
  username: string | null;
  email: string | null;
  isActive: boolean | null;
};
