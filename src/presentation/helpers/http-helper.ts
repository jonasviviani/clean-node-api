import { ServerError } from '../erros/server-error'
import { HttpResponse } from '../protocols/http'

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error
})

export const serverError = (): HttpResponse => ({
  statusCode: 500,
  body: new ServerError()
})

export const sucess = (message: 'Sucesso'): HttpResponse => ({
  statusCode: 200,
  body: message
})
