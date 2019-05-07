const express = require('express');
const router = express.Router();

const faviconMiddleware = require('./middlewares/favicon');
const userRouter = require('./userRouter');
const songRouter = require('./songRouter');

// Middleware
router.use(faviconMiddleware);

// Main Route - Simple message
router.get('/', (request, response) => {
  response.send(
    `<h3>Basic API structure</h3>
     <p>We are using nodemon package to reload the API every time some code is changed.</p>
     <p>Routes.</p>
      <ul>
        <li>Index</li>
        <li><a href="/user">User</a></li>
        <li><a href="/user/abc01">User by Id</a></li>
        <li><a href="/song">Song</a></li>
        <li><a href="/song/5">Song by Id</a></li>
      </ul>`
  );
});

// Users
router.use('/user', userRouter);

// Songs
router.use('/song', songRouter);

module.exports = router;
