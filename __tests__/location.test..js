const app = require('../src/server/express.js')
const request = require('supertest')

describe("test user features", () => {
    beforeAll((done) => {
        db.createTestDatabase().then(() => {
            db.seedTestDatabase().then(async () => {
                process.env.NODE_ENV = "test"
                // do login
                API_KEY = await login()
                done()
            })
        })
    })
    afterAll((done) => {
        db.destroyTestDatabase().then(() => done())
    })
    it('check health', async () => {
        const response = await _request(_app).get('/health')
        expect(response.status).toBe(200)
    })
    it('GET /autoreply 拿全部自動回覆', async () => {
        const response = await _request(_app).get('/autoreply')
        .set('authorization', API_KEY)
        expect(response.status).toBe(200)
    })
})