import { NextFunction, Request, Response } from 'express';


class TestController {
  public test = (req: Request, res: Response, next: NextFunction) => {
    try {
      res.status(200).json({ data: "hello world", message: 'findOne' });
    } catch (error) {
      next(error);
    }
  }
}

export default TestController;
