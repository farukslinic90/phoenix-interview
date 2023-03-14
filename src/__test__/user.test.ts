import request from "supertest";

const SELF_URL = "http://localhost:5000";

describe("user api test", () => {
  it("get user method should return status 200 code", async () => {
    return request(SELF_URL)
      .post("/graphql")
      .send({
        query: `{
              user {
                id
                message
              }
            }`,
      })
      .expect(200);
  });

  it("update user method should return updated message", async () => {
    return request(SELF_URL)
      .post("/graphql")
      .send({
        query: `
            mutation {
                updateUser(message: "Updated message") {
                  message
                }
              },
        `,
      })
      .expect(200)
      .expect((res) => {
        expect(res.body.data.updateUser.message).toBe(
          "manual - Updated message"
        );
      });
  });
});
