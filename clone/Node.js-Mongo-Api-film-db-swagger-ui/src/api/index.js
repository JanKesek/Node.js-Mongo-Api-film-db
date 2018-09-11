import express from 'express';
import { filmRouter } from './resources/film';

export const restRouter = express.Router();
restRouter.use('/films', filmRouter);
