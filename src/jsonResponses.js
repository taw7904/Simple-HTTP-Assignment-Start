const text = require('./textResponses.js');

// create a JSON object of the hello text from textResponses
// stringify JSON because our HTTP response needs to be in text

const getHelloJSON = (request, response) => {
  const helloJSON = {
    message: text.hello,
  };
  const stringMessage = JSON.stringify(helloJSON);

  response.writeHead(200, {
    'Content-Type': 'application/json',
  });
  response.write(stringMessage);
  response.end();
};

// similar function for the time
const getTimeJSON = (request, response) => {
  const timeJSON = {
    time: text.getTimeString(),
  };
  const stringMessage = JSON.stringify(timeJSON);

  response.writeHead(200, {
    'Content-Type': 'application/json',
  });
  response.write(stringMessage);
  response.end();
};

// export the 2 functions
module.exports.getHelloJSON = getHelloJSON;
module.exports.getTimeJSON = getTimeJSON;
