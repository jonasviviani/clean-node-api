import request from 'supertest'
import app from '../config/app'

describe('Body Parser Middlewares', () => {
  test('Testando body parser com json', async () => {
    app.post('/test_body_parser', (req, res) => {
      res.send(req.body)
    })
    await request(app)
      .post('/test_body_parser')
      .send({ name: 'Jonas' })
      .expect({ name: 'Jonas' })
  })
})
