export class MissingParamError extends Error {
  constructor (paramName: string) {
    super(`Parametro esperado: ${paramName}`)
    this.name = 'MissingParamError'
  }
}
