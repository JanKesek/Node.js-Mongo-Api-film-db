import express from 'express'
import filmController from './film.controller'

export const filmRouter = express.Router();
filmRouter.route('/').post(filmController.create).get(filmController.findAll);
filmRouter.route('/:id').get(filmController.findOne).delete(filmController.delete).put(filmController.update)