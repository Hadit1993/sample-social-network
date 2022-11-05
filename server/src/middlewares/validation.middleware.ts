import { ValidationResult } from "joi";
import BaseResponse from "../models/base-response.model";
import { transformJoiErrror } from "../transformers/joi.transformer";
import { HttpError, Middleware } from "../utils/common-types";

export default function validationMiddleware<T>(
  validator: (reqBody: T) => ValidationResult
): Middleware<T> {
  return async (req, _, next) => {
    const result = validator(req.body);
    if (result.error) {
      next(
        new HttpError(
          "some inputs are invalid",
          422,
          transformJoiErrror(result.error)
        )
      );
    }

    return next();
  };
}
