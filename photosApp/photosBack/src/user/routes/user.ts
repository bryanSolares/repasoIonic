import { Router, Request, Response } from 'express';
import { Controller } from '../controller/controller';
import { verifiToken } from '../../middlewares/authentication';
const routes = Router();

routes.get('/', Controller.allUsers);
routes.post('/create', Controller.newUser);
routes.put('/update', verifiToken, Controller.updateUser);

export default routes;
