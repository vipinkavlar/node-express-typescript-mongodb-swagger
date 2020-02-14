import { plainToClass } from 'class-transformer';
import { validate, ValidationError } from 'class-validator';
import { RequestHandler } from 'express';

function validationJsonResponseMiddleware(type: any, skipMissingProperties = false): RequestHandler {
  let validationResponseArray: { [id: string]: any; } = {}   
  return (req, res, next) => {
    validate(plainToClass(type, req.body), { skipMissingProperties })
    .then((errors: ValidationError[]) => {
      if (errors.length > 0) {
        for (const [key, val] of Object.entries(errors)) {
          validationResponseArray[val.property] = val.constraints;
        }
        next(res.status(400).json(validationResponseArray));
      } else {
        next();
      }
    });
  };
}

export default validationJsonResponseMiddleware;
