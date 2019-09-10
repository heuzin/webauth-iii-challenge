const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
require('dotenv').config

console.log(process.env.JWT_SECRET);

const authRouter = require('');
const usersRouter = require('');

const server = express();

server.use(helmet);
server.use(express.json());
server.use(cors());

server.use('/api/auth', authRouter);
server.use('/api/users', usersRouter);

server.get('/', (req, res) => {
    res.send('Its online')
});

module.exports = server;