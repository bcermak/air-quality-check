require('dotenv').config();
const express = require('express');
const app = express();

fetch('https://api.openaq.org/v2/locations?limit=100&page=1&offset=0&sort=desc&radius=1000&order_by=lastUpdated&dumpRaw=false', {
  method: 'GET',
  headers: {
    "X-API-Key": "7fc8867386b2d59d26266f1f4705a7e52c77e5c198a4f5c5aba6ca7f638fa093",
    "accept": "application/json"
  }
})
  .then((response => response.json()))
  .then(response => console.log(response))
  .catch(err => console.log(err));

const port = process.env.PORT || 8080
app.listen(port, ()=>console.log(`Listening on port ${port}`));