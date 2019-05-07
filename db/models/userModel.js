// simulates require real mongo connection: const mongo = require('db')
const mongo = {
  abc01: {
    id: 'abc01',
    name: 'Dalila',
    age: 24
  }
};

// Simulates getting data from Database
const findOne = (id, callback) => {
  const data = mongo[id] || {};
  callback(null, data);
};

module.exports = {
  findOne
};
