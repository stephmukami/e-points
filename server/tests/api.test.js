const request = require("supertest");
const app = require("../app");

// Mock the africastalking module
jest.mock('africastalking', () => {
  return () => ({
    AIRTIME: {
      send: jest.fn().mockResolvedValue({
        numSent: 1,
        totalAmount: "KES 10",
        totalDiscount: "KES 0.4000",
        responses: [{
          phoneNumber: "+254797645137",
          amount: "KES 10.0000",
          status: "Sent",
          requestId: "ATQid_123456789",
          errorMessage: "None"
        }]
      })
    }
  });
});

describe("POST /api/send-airtime", () => {
  it("should send airtime successfully", async () => {
    const res = await request(app)
      .post("/api/send-airtime")
      .send({ 
        phoneNumber: "+254797645137", 
        airtimeAmount: 10
      });

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("numSent", 1);
    expect(res.body.responses[0].status).toBe("Sent");
  });

});