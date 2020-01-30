import { Router } from 'express';
import TestController from '../controllers/test.controller';
import Route from '../interfaces/routes.interface';

class TestRoute implements Route {
  public path = '/test';
  public router = Router();
  public testController = new TestController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}/das`, this.testController.test);
  }
}

export default TestRoute;
