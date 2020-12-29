export class UnauthorizedError extends Error {
  constructor () {
    super('Sem autorização')
    this.name = 'UnauthorizedError'
  }
}
