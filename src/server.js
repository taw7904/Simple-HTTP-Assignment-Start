const http = require('http');
const htmlHandler = require('./htmlResponses.js');
const textHandler = require('./textResponses.js');
const jsonHandler = require('./jsonResponses.js');
const imageHandler = require('./imageResponses.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

// start server and listen for HTTP traffic
const onRequest = (request, response) => {
  console.log(request.url);

  // handle the URL and decide which page to send back. set default page to be index
  switch (request.url) {
    case '/':
      htmlHandler.getIndex(request, response);
      break;
    case '/page2':
      htmlHandler.getPage2(request, response);
      break;
    case '/hello':
      textHandler.getHello(request, response);
      break;
    case '/time':
      textHandler.getTime(request, response);
      break;
    case '/helloJSON':
      jsonHandler.getHelloJSON(request, response);
      break;
    case '/timeJSON':
      jsonHandler.getTimeJSON(request, response);
      break;
    case '/dankmemes':
      imageHandler.showImage(request, response);
      break;
    default:
      htmlHandler.getIndex(request, response);
      break;
  }
};
http.createServer(onRequest).listen(port);
console.log(`Listening on 127.0.0.1: ${port}`);
