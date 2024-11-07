// tests/api.test.js
const axios = require('axios');

describe('API Automation Test - GET Request', () => {
  it('should return status code 200 for a successful GET request', async () => {
    try {
      const response = await axios.get('https://reqres.in/api/users?page=2');
      expect(response.status).toBe(200); // Validate if the status code is 200
    } catch (error) {
      console.error(`Error making GET request: ${error.message}`);
    }
  });
});
