const express = require('express');
const globalMiddleware = require('../config/globalMiddleware');
const authRouter = require('../auth/auth-router');
const usersRouter = require('../user/userRouter');
const jokesRouter = require('../jokes/jokesRouter');
const userFavoriteRouter = require('../userFavorites/userFavoritesRouter');

const server = express();

globalMiddleware(server);

server.use('/api/auth', authRouter);
server.use('/api/users', usersRouter);
server.use('/api/jokes', jokesRouter);
server.use('/api/favorite-joke', userFavoriteRouter);

server.get('/', (req, res) => {
  res.send('Dad Jokes');
});

module.exports = server;
