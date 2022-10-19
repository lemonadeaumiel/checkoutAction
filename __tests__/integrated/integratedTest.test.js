require('dotenv').config();
const request = require("supertest");
const app = require("../../index");
const PORT = process.env.PORT || 8000;

// Test also covers checkout product controller
describe("End-to-End Testing", () => {
  let server;

  beforeEach(() => { server = app.listen(PORT, () => console.log(`Listening at port ${PORT}`)); });
  afterEach(async () => { await server.close(); });

  it("should return price as 0 if request contain no item being picked", async () => {
    let input = [];

    const res = await request(server).post("/checkout").send({
      ids: input,
    });

    expect(res.body.price).toEqual(0);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("price", 0);
  });

  it("should return error if request contain invalid item id", async () => {
    let input = [1, 2, "a"];

    const res = await request(server).post("/checkout").send({
      ids: input
    });

    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("message");
  });

  it("should return price as 360 if 2 Rolex, 1 Michael Kors, 1 Swatch, and 1 Casio are picked", async () => {
    let input = ["1", "1", "2", "3", "4"];
    const res = await request(server).post("/checkout").send({
      ids: input,
    });

    expect(res.body.price).not.toEqual(0);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("price", 360);
    expect(res.body.price).toEqual(360);
  });

  it("should return price as 200 if 2 Rolex are picked", async () => {
    let input = ["1", "1"];

    const res = await request(server).post("/checkout").send({
      ids: input,
    });

    expect(res.body.price).not.toEqual(0);
    expect(res.statusCode).toEqual(200);
    expect(res.body.price).toEqual(200);
    expect(res.body).toHaveProperty("price", 200);
  });

  it("should return the same price wether 3 or 2 Rolex are picked", async () => {
    let input1 = ["1", "1", "1"];
    let input2 = ["1", "1"];

    const res1 = await request(server).post("/checkout").send({
      ids: input1,
    });
    const res2 = await request(server).post("/checkout").send({
      ids: input2,
    });

    expect(res1.body.price && res2.body.price).not.toEqual(0);
    expect(res1.statusCode && res2.statusCode).toEqual(200);
    expect(res1.body).toHaveProperty("price", 200);
    expect(res2.body).toHaveProperty("price", 200);
    expect(res1.body.price).toEqual(200);
    expect(res2.body.price).toEqual(200);
    expect(res1.body.price).toEqual(res2.body.price);
  });

  it("should return price as 80 if 1 Michael Kors is picked", async () => {
    let input = ["2"];

    const res = await request(server).post("/checkout").send({
      ids: input,
    });

    expect(res.body.price).not.toEqual(0);
    expect(res.statusCode).toEqual(200);
    expect(res.body.price).toEqual(80);
    expect(res.body).toHaveProperty("price", 80);
  });

  it("should return price as 120 if 2 Michael Kors are picked", async () => {
    let input = ["2", "2"];

    const res = await request(server).post("/checkout").send({
      ids: input,
    });

    expect(res.body.price).not.toEqual(0);
    expect(res.statusCode).toEqual(200);
    expect(res.body.price).toEqual(120);
    expect(res.body).toHaveProperty("price", 120);
  });

  it("should show only 40 in difference between the price of 3 Michael Kors and 4 Michael Kors", async () => {
    let input1 = ["2", "2", "2"];
    let input2 = ["2", "2", "2", "2"];

    const res1 = await request(server).post("/checkout").send({
      ids: input1,
    });
    const res2 = await request(server).post("/checkout").send({
      ids: input2,
    });

    expect(res1.body.price && res2.body.price).not.toEqual(0);
    expect(res1.statusCode && res2.statusCode).toEqual(200);
    expect(res1.body).toHaveProperty("price", 200);
    expect(res2.body).toHaveProperty("price", 240);
    expect(res1.body.price).toBeLessThan(res2.body.price);
    expect(res2.body.price - res1.body.price).toEqual(40);
  });

  it("should return price as 50 if 1 Swatch is picked", async () => {
    let input = ["3"];

    const res = await request(server).post("/checkout").send({
      ids: input,
    });

    expect(res.body.price).not.toEqual(0);
    expect(res.statusCode).toEqual(200);
    expect(res.body.price).toEqual(50);
    expect(res.body).toHaveProperty("price", 50);
  });

  it("should return each unit priced at 50 no matter how many Swatch are picked", async () => {
    let input1 = ["3", "3", "3", "3"];
    let input2 = ["3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3"];

    const res1 = await request(server).post("/checkout").send({
      ids: input1,
    });
    const res2 = await request(server).post("/checkout").send({
      ids: input2,
    });

    expect(res1.body.price && res2.body.price).not.toEqual(0);
    expect(res1.statusCode && res2.statusCode).toEqual(200);
    expect(res1.body).toHaveProperty("price", 200);
    expect(res2.body).toHaveProperty("price", 550);
    expect(res1.body.price / input1.length).toEqual(50);
    expect(res2.body.price / input2.length).toEqual(50);
  });

  it("should return price as 30 if 1 Casio is picked", async () => {
    let input = ["4"];

    const res = await request(server).post("/checkout").send({
      ids: input,
    });

    expect(res.body.price).not.toEqual(0);
    expect(res.statusCode).toEqual(200);
    expect(res.body.price).toEqual(30);
    expect(res.body).toHaveProperty("price", 30);
  });

  it('should return each unit priced at 30 no matter how many Casio are picked', async () => {
    let input1 = ["4", "4", "4", "4"];
    let input2 = ["4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4"];

    const res1 = await request(server).post("/checkout").send({
      ids: input1,
    });
    const res2 = await request(server).post("/checkout").send({
      ids: input2,
    });

    expect(res1.body.price && res2.body.price).not.toEqual(0);
    expect(res1.statusCode && res2.statusCode).toEqual(200);
    expect(res1.body).toHaveProperty("price", 120);
    expect(res2.body).toHaveProperty("price", 330);
    expect(res1.body.price / input1.length).toEqual(30);
    expect(res2.body.price / input2.length).toEqual(30);
  });
});
