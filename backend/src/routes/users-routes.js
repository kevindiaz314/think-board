import { Router } from 'express';
import { createUser } from '../controller/users-controller.js';

const usersRoutes = Router();

usersRoutes.post("/create", createUser);

export default usersRoutes;

