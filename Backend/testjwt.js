const axios = require("axios")

// Request API.
// Add your own code here to customize or restrict how the public can register new users.
// axios
//   .post('http://localhost:1337/api/auth/local/register', {
//     username: 'dfdfsdfsd',
//     email: 'asasdasdasd@strapi.io',
//     password: 'strapiPassword',
//   })
//   .then(response => {
//     // Handle success.
//     console.log('Well done!');
//     console.log('User profile', response.data.user);
//     console.log('User token', response.data.jwt);
//   })
//   .catch(error => {
//     // Handle error.
//     console.log('An error occurred:', error.response);
//   });
async function login() {
  const res2 = await this.axios.get(`http://localhost:1337/api/users/dfdfsdfsd?populate=*`, {
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjkwMzkxOTg0LCJleHAiOjE2OTA5OTY3ODR9.K2zbl1fV4BtMCdxYUXnb69pWmXBrChTfvuOFMo36XAQ`,
    }
  })
  return res2;
}
console.log(login());