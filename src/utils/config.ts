import dotenv from 'dotenv';
dotenv.config();

export const config = {
    port: process.env.PORT || 3000,
    jwtSecret: process.env.JWT_SECRET || 'secret',
    mongooseUri: process.env.MONGOOSE_URI || 'mongodb://localhost:27017/express-socketio',
};