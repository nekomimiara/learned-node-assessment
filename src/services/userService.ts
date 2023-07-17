import { ApplicationError } from "../types/common/applicationError";
import { User } from "../types/user/user";
import { createUserRecord, getUserById } from "../models/user"

/**
 * Validates the database response and return user object if valid.
 * @param id id of the user
 * @returns user object if matched
 */
export const getUser = (id: number) => {
  const user = getUserById(id);

  if (!user) {
    throw new ApplicationError('User not found', 404);
  }

  return user;
}

/**
 * Service layer of create user.
 * @param user id of the user
 * @returns user object if matched
 */
 export const createUser = (user: User) => {
  const dbUser = createUserRecord(user);

  if (!dbUser) {
    throw new ApplicationError('Error creating user', 500);
  }

  return dbUser;
}