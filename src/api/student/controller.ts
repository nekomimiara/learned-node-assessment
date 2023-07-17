import { Router } from "express";
import { createUser, getUser } from "../../services/userService";
import { handleError, handleSuccess } from "../../utils/responseHandler";
import { createUserValidator, getUserValidator } from "./validator";

export const userRoutes = Router();

/**
 * Get user API. Expects user id and returns a user typed object. 
 * @param req
 * @param res
 */
 userRoutes.get('/user/:id', async (req, res) => {
  try {
    const { id } = getUserValidator(req);
    const result = getUser(id);
  
    handleSuccess(res, result);
  } catch (e) {
    handleError(res, e);
  }
});

/**
 * Create user API. Expects a user object and returns the created user object. 
 * @param req user object without id
 * @param res user object
 */
 userRoutes.post('/user', async (req, res) => {
  try {
    const validatedUser = createUserValidator(req);
    const result = createUser(validatedUser);
  
    handleSuccess(res, result);
  } catch (e) {
    handleError(res, e);
  }
});
