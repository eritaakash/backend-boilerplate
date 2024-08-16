/*
    * This is the main API route file. 
    * This file is responsible for importing all the API routes 
    * and using them in the express app.
*/

/* Import all the API routes */
import authRoutes from './auth/login';

export default (app: any) => {
    app.use('/api/auth', authRoutes);
};