const path = require('path');

const homeRoute = (req, res) => {
  res.sendFile(path.join(__dirname, '../views/index.html'));
  };

module.exports = {
    homeRoute,
}
