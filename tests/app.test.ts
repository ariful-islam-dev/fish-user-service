import request from "supertest";
import app from "../src/app";
import { describe, it } from "node:test";

describe("user", () => {
  it("should be create a user", async () => {
    // const expect = chai.expect;
    await request(app)
      .post("/users")
      .send({
        authUserId: "ariful123",
        name: "Md. Ariful Islam Raju",
        email: "ariful123@gmail.com",
      })
      .expect(201);
  });

  it("should be retrieve all user info", async () => {
    await request(app).get("/users").expect(200);
  }); 
  
  it("should be retrieve a user by id", async () => {
    await request(app).get("/users/clwbzpxzb0000yb1tawll9agb").expect(200);
  });

});
