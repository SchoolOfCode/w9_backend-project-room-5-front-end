// import fetchMock from "jest-fetch-mock";

// // src/utils/currency.test.js
// global.fetch = jest.fn(() =>
//   Promise.resolve({
//     json: () => Promise.resolve({
//       payload: [
//         {
//           lesson_id: 1,
//           name: "Alex Martin",
//           topic: "javascript tutorial for everyone",
//           description: "60 minutes to launch your personal JS project!",
//           zoom: "http://zoom.com",
//           paypalemail: "calumislam@example.com",
//           datetime: "2022-07-25T11:30",
//           duration: 30,
//           starrating: 3,
//           badge1: null,
//           badge2: null,
//           badge3: null,
//           level: null,
//           extra: null
//         }]
//      })
//   })
// );

// fetchMock.enableMocks();

// it("returns null when exception", async () => {
//   fetch.mockImplementationOnce(() => Promise.reject("API is down"));

//   const rate = await convert("USD", "CAD");

//   expect(rate).toEqual(null);
//   expect(fetch).toHaveBeenCalledWith(
//     "https://api.exchangeratesapi.io/latest?base=USD"
//   );
// });
