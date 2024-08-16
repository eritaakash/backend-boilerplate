import express from 'express';
import cors from 'cors';

import { Server } from 'socket.io';
import http from 'http';

import chalk from 'chalk';
import handlers from './utils/handlers';

const app = express();
app.use(cors());

const server = new http.Server(app);
const io = new Server(server);

handlers(app, io);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

server.listen((process.env.PORT || 3000), () => {
    console.log(chalk.green(`\n[!]: Backend Started.`));
});
