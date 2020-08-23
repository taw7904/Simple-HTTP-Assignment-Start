// pull in the file system module
const fs = require('fs');

const photo = fs.readFileSync(`${__dirname}/../client/spongegar.png`);

const showImage = (request, response) => {
  response.writeHead(200, {
    'Content-Type': 'image/png',
  });
  response.write(photo);
  response.end();
};

module.exports.showImage = showImage;
