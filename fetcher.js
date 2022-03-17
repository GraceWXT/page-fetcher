// take two command line arguments:
// a URL
// a local file path
// Output:
// download the resource at the URL to the local path on your machine. 
// Upon completion, print out a message like Downloaded and saved 1235 bytes to ./index.html.

const input = process.argv.slice(2);
const request = require("request");
const fs = require('fs')
// const { stdout }= require("process");

// request.get(`${input[0]}`).on("reponse", (response) => {
//   // stdout.write(`got response: ${response.statusCode}`)

//   fs.writeFile(`${input[1]}`, response, { flag: 'a+' }, err => {
//     if (err) {
//       console.error(err)
//       return
//     }
//     //file written successfully
//   })
// });

request(`${input[0]}`, (error, response, body) => {
  if (error) {
    console.log('error:', error);
    return;
  } // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  fs.writeFile(`${input[1]}`, body, { flag: 'a+' }, err => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`Downloaded and saved ${body.length} bytes to ${input[1]}.`)
    //file written successfully
  })
});

// const content = 'Some content!'

