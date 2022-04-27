const fs = require('fs');

const sendMockData = (req, res) => {
  fs.readFile('./location.json', 'utf8', (err, data) => {
    res.send(JSON.parse(data));
  });
};

module.exports = { sendMockData };
