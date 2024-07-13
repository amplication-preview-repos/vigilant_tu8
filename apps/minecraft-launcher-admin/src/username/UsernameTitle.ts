import { Username as TUsername } from "../api/username/Username";

export const USERNAME_TITLE_FIELD = "firstName";

export const UsernameTitle = (record: TUsername): string => {
  return record.firstName?.toString() || String(record.id);
};
