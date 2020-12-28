import { MongoHelper } from '../../infra/db/mongodb/helpers/mongo.helper'
import request from 'supertest'
import app from '../config/app'

describe('SignUp Routes', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL as string)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    const accountCollection = await MongoHelper.getCollection('accounts')
    await accountCollection.deleteMany({})
  })

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
