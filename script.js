// $(document).ready(function() {
//     $.getJSON("https://http://food2fork.com/api/search?key=c11f52460b8807c523cb948baada5f63&q=shredded%20chicken", function(data) {
//         console.log("haha");
// }); // close document ready function

// Import the dependencies
const cheerio = require("cheerio")
    , req = require("tinyreq")
    ;

var request = require('request');
var searchUrl = "http://food2fork.com/api/search?key=c11f52460b8807c523cb948baada5f63";
var recipeUrl;

// Define the scrape function
function scrape(url, data, cb) {
    // 1. Create the request
    req(url, (err, body) => {
        if (err) { return cb(err); }

        // 2. Parse the HTML
        let $ = cheerio.load(body)
          , pageData = {}
          ;

        // 3. Extract the data
        Object.keys(data).forEach(k => {
            pageData[k] = $(data[k]).text();
        });

        // Send the data in the callback
        cb(null, pageData);
    });
}


request(searchUrl + '&q=shredded%20chicken', function (error, response, body) {
  if (!error && response.statusCode == 200) {

    console.log("RECIPES");
    // console.log(body);
    // console.log(JSON.parse(body).recipes[0].f2f_url);
    // console.log(JSON.parse(body).recipes[0].f2f_url);
    recipeUrl = JSON.parse(body).recipes[0].f2f_url;
    console.log("HELLYE");
    // var html = '';
  }

  scrape(recipeUrl, {
     description: "li"
  }, (err, data) => {
      console.log(err || data);
  });

});
