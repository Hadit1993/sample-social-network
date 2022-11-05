import { NextFunction, Request, Response } from "express";
import BaseResponse from "../models/base-response.model";
import { HttpError } from "../utils/common-types";

export default function handleError(
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.error(error);

  if (error instanceof HttpError) {
    return res
      .status(error.statusCode)
      .json(
        new BaseResponse(error.data, { success: false, message: error.message })
      );
  } else
    return res
      .status(500)
      .json(new BaseResponse(undefined, { success: false }));
}
