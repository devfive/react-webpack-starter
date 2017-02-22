const path = require('path');
const dist = path.join(__dirname, '../dist');

module.exports = {
  paths: {
    dist,
    baseUrl: '/',
  },
  ports: {
    frontend: 1234,
  },
};
