const { app } = require("../index");
import db from "../db";
// import * as faker from "faker"
// import supertest from "supertest"

describe("test pricing on checkout", () => {
  let thisDb = db;
  beforeAll(async () => {
    await thisDb.sequelize.sync({ force: true });
  });

  //expected to pass
  test("the input id should be within range", () => {
    let expected = [001, 002, 003, 004];
    expect([001, 003, 002, 004]).toEqual(expect.arrayContaining(expected));
  });

  //expected to not pass
  test("it should get a product with the input id", () => {
    let id = null;

    expect(id).toHaveLength(0);
    expect(id).toBeFalsy();
    expect(id).toThrow(new Error());
  });
  test("error should be thrown if the input is not int", () => {
    let id = undefined;

    expect(id).toThrow(new Error());
  });
  test("error should be thrown if input is less than one", () => {
    let body = [];

    expect(body.length).toBeGreaterThan(0);
  })

  //expected to not pass
  test("it should calculate the price based on the unit bought", () => {
    let price = null;
    let unit = null;
    let sum = price * unit;

    expect(sum).toBeGreaterThan(0);
    expect(sum).toBeDefined();
  });

  //expected to pass
  test("it should calculate the discount ", () => {
    let price = null;
    let unit = null;
    let sum = price * unit;

    expect(sum).toBeGreaterThan(0);
  });

  //expected to not pass
  test("it should return the price", () => {
    let price = null;
    let unit = null;
    let sum = price * unit;

    expect(sum).toHaveReturnedWith(price);
  });
});
