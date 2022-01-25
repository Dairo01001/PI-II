import supertest from "supertest";

import app from "../../src/app";

const agent = supertest(app);

describe("GET /", () => {
  it("should return 200 OK", () => {
    return agent.get("/").expect(200);
  });
});

describe("GET /genres", () => {
  it("should return 201 OK", () => {
    return agent.get("/genres").expect(201);
  });
});
