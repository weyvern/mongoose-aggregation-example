import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import 'dotenv/config.js';
import './db/mongoose.js';
import commentsRouter from './routes/commentsRouter.js';
import locationRouter from './routes/locationRouter.js';

const app = express();
const port = process.env.PORT || 5000;

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
}
app.use(cors({ origin: '*' }));
app.use(express.json());
app.use('/comments', commentsRouter);
app.use('/locations', locationRouter);

app.listen(port, () => console.log(`Server running on port ${port}`));
