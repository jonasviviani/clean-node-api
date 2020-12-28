export class ServerError extends Error {
  constructor (stack: string) {
    super('Erro Interno')
    this.name = 'ServerError'
    this.stack = stack
  }
}
