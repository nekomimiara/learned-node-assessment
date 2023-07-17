import Joi from 'joi';
import { TypedRequest } from '../../types/common/request';
import { ApplicationError } from '../../types/common/applicationError';
import { User } from '../../types/user/user';

/**
 * Validates the request of get user.
 * @param req get user request
 * @returns the user id
 */
export const getUserValidator = (req: TypedRequest<{id: string}, unknown>): { id: number } => {
  const schema = () => Joi.object().keys({
    id: Joi.number().required().min(1)
  });

  try {
    const attributes = {
      id: parseInt(req.params?.id || '0')
    }
    const validator = schema().validate(attributes);
    if (validator.error) {
      throw new ApplicationError('Invalid user id', 400);
    }

    return attributes;
  } catch (e) {
    throw new ApplicationError('User id is required.', 400);
  }
};

/**
 * Validates the request of create user.
 * @param req create user request
 * @returns user object
 */
 export const createUserValidator = (req: TypedRequest<unknown, User>): User => {
  const schema = () => Joi.object().keys({
    name: Joi.string().min(3).required()
  });
  
  const attributes = {
    name: req.body?.name || ''
  }
  const validator = schema().validate(attributes);
  if (validator.error) {
    throw new ApplicationError('Invalid user details', 400);
  }

  return attributes;
};
