import express from 'express'
import seturMiddlewares from './middlewares'
import seturRoutes from './routes'

const app = express()
seturMiddlewares(app)
seturRoutes(app)
export default app
