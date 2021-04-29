import express from 'express';
import { getAll, create } from '../controllers/comments.js';

const commentsRouter = express.Router();

commentsRouter.get('/', getAll);
commentsRouter.post('/:id', create);

export default commentsRouter;
