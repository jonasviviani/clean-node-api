import request from 'supertest'
import app from '../config/app'

describe('SignUp Routes', () => {
  test('Testando sucesso de retorno do Account', async () => {
    await request(app)
      .post('/api/signup')
      .send({
        name: 'Jonas',
        email: 'jonasviviani2012@hotmail.com',
        password: '123',
        passwordConfirmation: '123'
      })
      .expect(200)
  })
})
