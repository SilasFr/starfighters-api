import { NextFunction, Request, Response } from "express";
import { ObjectSchema } from "joi";

export function validateSchema(schema: ObjectSchema) {
  return (req: Request, res: Response, next: NextFunction) => {
    const validation = schema.validate(req.body);

    if (validation.error) {
      throw { type: "invalid_format", message: validation.error.details[0] };
    }
    res.locals.verified = req.body;
    next();
  };
}
