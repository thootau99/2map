const {app} = require('../src/server/express.js')
const supertest = require('supertest')
const { insert_fake_cities } = require('../functions/fake_cities.js')
const { clean_test_cache } = require('../functions/clean_test_cache.js')
describe("test user features", () => {
    const OLD_ENV = process.env;
    beforeAll(async () => {
        jest.resetModules()
        process.env = { ...OLD_ENV, test: true };
        await insert_fake_cities()
    })
    beforeEach(() => {
      jest.resetModules()
      process.env = { ...OLD_ENV, test: true };
    });
  
    afterAll(async () => {
      await clean_test_cache()
      process.env = OLD_ENV;
    });
// GET /cities/台中市 -> returns all distruct in "台中市"
// GET /cities/台中市/大里區 -> returns all street name in "台中市大里區"
    test('GET /cities/台中市', async () => {
        // N, E, road1, road2, comment
        const result = await supertest(app).get('/cities/台中市')
        expect(result.status).toBe(200)
        expect(result.body.indexOf('大里區')).toBeGreaterThan(0)
      });

      test('GET /cities/台中市/大里區', async () => {
        const result = await supertest(app).get('/cities/台中市/大里區')
        expect(result.status).toBe(200)
        expect(result.body.length).toBeGreaterThan(0)
    });
})