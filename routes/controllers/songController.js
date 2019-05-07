const songModel = require('../../db').songModel;

const getAll = (request, response, next) => {
  songModel.find((err, result) => {
    if (err) {
      console.error('Song - internal error:', err);
      next(err);
    }

    response.json(result);
  });
};

const getById = (request, response) => {
  const { id } = request.params;
  response.json({ artist: `Adele by ID - ${id}` });
};

module.exports = {
  getAll,
  getById
};
