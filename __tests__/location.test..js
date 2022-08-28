const {app} = require('../src/server/express.js')
const supertest = require('supertest')
describe("test user features", () => {
    const OLD_ENV = process.env;

    beforeEach(() => {
      jest.resetModules()
      process.env = { ...OLD_ENV, test: true };
    });
  
    afterAll(() => {
      process.env = OLD_ENV;
    });

    test('POST /locations/insert', () => {
        // N, E, road1, road2, comment

      });

    test('GET /locations/list', async () => {
        const result = await supertest(app).get('/locations/list')
        console.log(result)
        expect(result.status).toBe(200)
    });
})