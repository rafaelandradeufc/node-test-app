import request = require("supertest");
import app = require("../../app");
import { setup } from "../setup-test";

setup()

describe("getUsers", () => {
    it("should receive status 200 when get users", async () => {
      const response = await request(app).get("/api/user");

      expect(response.status).toBe(200);
    });
  });