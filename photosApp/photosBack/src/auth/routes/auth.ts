import { Router, Request, Response } from 'express';
import { Controller } from '../controller/controller';
const routes = Router();

routes.post('/login', Controller.login);
routes.post('/logout', Controller.logout);

export default routes;
