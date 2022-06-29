import supertest from "supertest";
import app from "./app";

//NODE_OPTIONS=--experimental-vm-modules npx jest
describe("POST /lessons", () => {
  describe("Given a lesson", () => {
    // If user provides lesson JSON, should store JSON to database
    // Server responds with JSON success:true
    // Server responds with code 200
    test("Get back status 200 from server", async () => {
      const response = await supertest(app).post("/lessons").send({
        name: "Mr Test",
        topic: "How to win React Web Contracts ",
        description:
          "10 years experience doing freelance work . here to take your questions",
        zoom: "www.zoom.com",
      });
      expect(response.statusCode).toBe(200);
    });
  });
});
