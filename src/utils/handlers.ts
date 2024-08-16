import routesHandler from '../api/routes/index';
import eventsHandler from '../api/events/index';

export default (app: any, io: any) => {
    routesHandler(app);
    eventsHandler(io);
};