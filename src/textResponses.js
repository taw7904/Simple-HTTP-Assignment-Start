// dynamic function that can be called to get the current time
const hello = 'Hello World';

const getTimeString = () => {
  const d = new Date();
  const dateString = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
  return dateString;
};

// text response that sends the time
const getTime = (request, response) => {
  response.writeHead(200, {
    'Content-Type': 'text/plain',
  });
  response.write(getTimeString());
  response.end();
};

// text response that sends hello
const getHello = (request, response) => {
  response.writeHead(200, {
    'Content-Type': 'text/plain',
  });
  response.write(hello);
  response.end();
};

// export response functions AND time and hello - JSON will be able to use
// functionality from the textResponses without recoding it
module.exports.hello = hello;
module.exports.getTimeString = getTimeString;
module.exports.getHello = getHello;
module.exports.getTime = getTime;
