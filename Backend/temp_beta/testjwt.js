const axios = require("axios")

axios
  .post('http://localhost:1337/api/food-infos/', {
    headers: { "Content-Type": `application/json`},
    data: {
      data: {
        data : {
          
        }
      }
    }
  })
  .then(response => {
    // Handle success.
    console.log('Well done!');
  })
  .catch(error => {
    // Handle error.
    console.log('An error occurred:', error.response);
  });
