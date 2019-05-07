// simulates require real mongo connection: const mongo = require('db')
const mongo = { artist: 'Adele' };

const find = callback => {
  const data = mongo;
  callback(null, data);
};

module.exports = {
  find
};
