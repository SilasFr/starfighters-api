import { NextFunction, Request, Response } from "express";

export function errorHandler(
  error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (error.type === "invalid_format") {
    return res.status(422).send(error.message.message);
  }

  if (error.type === "not_found") {
    return res.status(404).send(error.message);
  }

  res.sendStatus(400);
}
