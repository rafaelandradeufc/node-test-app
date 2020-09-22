const request = require("supertest");
const app = require("../../app");
import { setup } from "../setup-test";

setup()

describe("getUsers", () => {
    it("should receive status 200 when get users", async () => {
      const response = await request(app).get("/user");

      expect(response.status).toBe(200);
    });
  });