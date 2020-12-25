import express from 'express'
import seturMiddlewares from './middlewares'

const app = express()
seturMiddlewares(app)
export default app
