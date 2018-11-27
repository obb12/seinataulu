const express = require('express')
var request = require('request');
var bodyParser = require('body-parser');
const moment = require( 'moment')

const app = express()

app.get('/list', function(req, res){
    request('https://www.sodexo.fi/ruokalistat/output/daily_json/124/'+ moment().format('Y')+'/' +  moment().format('M')  +'/'+ moment().format('D') +'/fi', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
  res.json(JSON.parse(body))
});
})
app.use(express.static(path.join(__dirname, '../app'), { maxAge: 86400000 }));
let port = process.env.PORT;
if (port == null || port == "") {
  port = 8080;
}
app.listen(port);
