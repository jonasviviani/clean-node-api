export class ServerError extends Error {
  constructor () {
    super('Erro Interno')
    this.name = 'ServerError'
  }
}
