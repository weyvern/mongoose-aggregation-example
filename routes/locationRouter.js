import express from 'express';
import { getAll, create, getSingle } from '../controllers/locations.js';

const locationRouter = express.Router();

locationRouter.get('/', getAll);
locationRouter.post('/', create);
locationRouter.get('/:id', getSingle);

export default locationRouter;
