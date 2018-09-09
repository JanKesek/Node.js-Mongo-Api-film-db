import express from 'express'
import { filmRouter } from './resources/film/film.router.js'
export const restRouter = express.Router()
restRouter.use('/films', filmRouter)
