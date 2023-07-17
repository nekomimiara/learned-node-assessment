import express from 'express';
import { ApplicationError } from '../types/common/applicationError';
import { ErrorResponse, SuccessResponse } from '../types/common/applicationResponse';

/**
 * Sends an appropriate error response as the response
 * @param res express response object
 * @param error error received from controller
 */
export const handleError = (res: express.Response, error: unknown) => {
  try {
    console.log(error);
    const applicationError = error as ApplicationError;
    const errorResponse = new ErrorResponse(applicationError.message);
    res.status(applicationError.code).send(errorResponse);
  } catch (e) {
    res.status(500).send('An error occurred');
  }
}

/**
 * Wraps the success response
 * @param res express response object
 * @param data response data
 */
 export const handleSuccess = (res: express.Response, data: unknown) => {
  const succeessMessage = new SuccessResponse(data);
  res.send(succeessMessage);
}