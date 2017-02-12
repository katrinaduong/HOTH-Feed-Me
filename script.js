// $(document).ready(function() {
//     $.getJSON("https://http://food2fork.com/api/search?key=c11f52460b8807c523cb948baada5f63&q=shredded%20chicken", function(data) {
//         console.log("haha");
// }); // close document ready function

// Import the dependencies
const cheerio = require("cheerio")
    , req = require("tinyreq")
    ;

var request = require('request');
var searchUrl = "http://food2fork.com/api/search?key=c11f52460b8807c523cb948baada5f63&q=";
var foodToSearch = "chicken"
var foodPicUrl;
var recipeUrl;
var ingredients;

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


request(searchUrl + foodToSearch, function (error, response, body) {
  if (!error && response.statusCode == 200) {

    console.log("RECIPES");
    recipeUrl = JSON.parse(body).recipes[0].f2f_url;
    foodPicUrl = JSON.parse(body).recipes[0].image_url;
    console.log("HELLYE");
    // var html = '';
  }

  scrape(recipeUrl, {
     description: "li"
  }, (err, data) => {
    //   console.log(err || data);
      ingredients = data.description.split(',').map(function(item){
          var arr = item.split(' ')
          return arr[arr.length - 1]
      });

      console.log(ingredients);


    //   ingredients = JSON.parse(data);
    //   console.log(ingredients);
  });

});
