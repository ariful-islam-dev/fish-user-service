import request from "supertest";
import app from "../src/app";
import { describe, it } from "node:test";

describe("email", () => {
  it("should be send a new email", async () => {
    // const expect = chai.expect;
    await request(app)
      .post("/emails/send")
      .send({
        recipient: "test6@email.com",
        subject: "Email Verification",
        body: "Your verification is ${code}",
        source: "user-registration"
      })
      .expect(201);
  });

  it("should all email", async () => {
    await request(app).get("/emails").expect(200);
  });
});
