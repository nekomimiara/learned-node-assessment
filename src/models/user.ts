import { User } from "../types/user/user";

const database: User[] = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
];
/**
 * Finds the user from the database.
 * @param id user id
 * @returns user object or undefined
 */
export const getUserById = (id: number) => {
  const user = database.filter((s) => s.id === id);

  return user[0];
}

/**
 * Creates the user in the database
 * @param user user object
 * @returns created user record
 */
export const createUserRecord = (user: User) => {
  // not required if a database was used
  const dbRecord = {
    id: database.length + 1,
    name: user.name
  };
  database.push(dbRecord);

  return dbRecord;
}