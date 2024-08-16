/*
    * This file is the entry point for the events API.
*/

import chalk from 'chalk';
import connect from './user/connect';

export default (io: any) => {
    io.on('connection', (socket: any) => {
        console.log(chalk.cyan(`\n[!]: User Connected: ${socket.id}`));

        /* Events to Handle */
        socket.on('user/connect', connect(io, socket));


        socket.on('disconnect', () => {
            console.log(chalk.red(`[!]: User Disconnected: ${socket.id}`));
        });
    });
};