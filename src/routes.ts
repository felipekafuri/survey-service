import { Router } from 'express'
import { SurveysController } from './controllers/SurveysController'
import { UserController } from './controllers/UserController'

const routes = Router()

const usersController = new UserController()
const surveysController = new SurveysController()

routes.post('/users', usersController.create)

routes.post('/surveys', surveysController.create)

routes.get('/surveys', surveysController.show)

export { routes }