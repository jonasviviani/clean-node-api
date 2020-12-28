export class ServerError extends Error {
  constructor (stack: string) {
    super('Erro Interno. Consulte o log para mais detalhes')
    this.name = 'ServerError'
    this.stack = stack
  }
}
