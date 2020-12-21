import { HttpResponse, HttpRequest } from '../protocols/http'
import { MissingParamError } from '../erros/missing-param-error'
import { badRequest } from '../helpers/http-helper'
export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name || !httpRequest.body.email) { return badRequest(new MissingParamError('name')) }

    if (!httpRequest.body.email) { return badRequest(new MissingParamError('email')) }

    return {
      statusCode: 400,
      body: new Error('Parametro nome não informado')
    }
  }
}
