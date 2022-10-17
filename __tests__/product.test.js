const { app } = require("../index");
import db from "../db";
// import * as faker from "faker"
// import supertest from "supertest"

describe("test create product", () => {
  let thisDb = db;
  beforeAll(async () => {
    await thisDb.sequelize.sync({ force: true });
  });

    it("should show all products", async () => {
    const res = await request(app).get("/api/product");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("product");
    }),

    it("should show a product", async (watchId) => {
      const res = await request(app).get("/api/product/:watchId");
      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty("product");
    }),

    it("it should create new product", async () => {
      const res = await request(app).post('/api/product')
      const randomString = faker.random.alphaNumeric(10);
      const randomNumber = Math.floor(1000 + Math.random() * 900000);

      const watchId = randomNumber();
      const watchName = randomString();
      const unitPrice = `password`;

      await res.send({ watchId, watchName, unitPrice });
      expect(res.statusCode).toEqual(201);
      expect(res.body).toHaveProperty("product");
    });

    it('should update a product', async (watchId) => {
      const res = await request(app).put('/api/product/:watchId')
      const randomString = faker.random.alphaNumeric(10);
      const randomNumber = Math.floor(1000 + Math.random() * 900000);

      const watchId = randomNumber();
      const watchName = randomString();
      const unitPrice = `password`;

      await res.send({ watchId, watchName, unitPrice });
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('product')
    }),

    it('should delete a product', async (watchId) => {
        const res = await request(app).del('/api/product/:watchId')
        expect(res.statusCode).toEqual(204)
    }),

    it('it should throw error if there is no name', async (watchId) => {
        const res = await request(app).del('/api/product/:watchId')
        expect(res.statusCode).toEqual(204)
    })
});
