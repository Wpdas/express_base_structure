const userModel = require('../../db').userModel;

const getUsers = (request, response) => {
  response.json({ name: 'Wenderson Pires', age: 29 });
};

const getUserById = (request, response, next) => {
  const { id } = request.params;
  userModel.findOne(id, (err, result) => {
    if (err) {
      console.error('User, internal error:', err);
      next(err);
    }

    response.json(result);
  });
};

const getTotal = (request, response) => {
  response.json({ total: 1 });
};

module.exports = {
  getUsers,
  getTotal,
  getUserById
};
