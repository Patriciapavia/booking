import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();
import express from 'express';
import connectDB from '../backend/config/db.js';
import sessionstRoute from './routes/sessionsRoutes.js';
// import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import userRoutes from './routes/userRoutes.js';
import sesssionRoutes from './routes/sessionRoutes.js';

connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Api is running...');
});

app.use('/api/sessions', sessionstRoute);
app.use('/api/users', userRoutes);
app.use('/api/session', sesssionRoutes);

// app.use(notFound);

// app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
