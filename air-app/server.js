require('dotenv').config();
const express = require('express');
const app = express();
var axios = require('axios');
var FormData = require('form-data');
var data = new FormData();

var config = {
  method: 'get',
maxBodyLength: Infinity,
  url: `http://api.airvisual.com/v2/station?station={{STATION_NAME}}&city={{CITY_NAME}}&state={{STATE_NAME}}&country={{COUNTRY_NAME}}&key=${process.env.API_KEY}`,
  headers: { 
    ...data.getHeaders()
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});


const port = process.env.PORT || 8080
app.listen(port, ()=>console.log(`Listening on port ${port}`));