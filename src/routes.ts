import { Router } from 'express'
import { testController } from './controllers'

const routes = Router()

routes.get('/test', testController.index)

export { routes }
