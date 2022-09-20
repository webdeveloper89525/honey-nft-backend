// import other routes
const userRoutes = require('./metadata');

const appRouter = (app, fs) => {

    // default route
    app.get('/', (req, res) => {
        res.send('Welcome to Node Server for Honey Metadata');
    });

    // other routes (main routes)
    userRoutes(app, fs);

};

module.exports = appRouter;