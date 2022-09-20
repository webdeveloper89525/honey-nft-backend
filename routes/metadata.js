const metaRoutes = (app, fs) => {

    // helper methods
    const readFile = (callback, returnJson = false, filePath, encoding = 'utf8') => {
        fs.readFile(filePath, encoding, (err, data) => {
            if (err) {
                throw err;
            }

            callback(returnJson ? JSON.parse(data) : data);
        });
    };

    // READ
    app.get('/honey/:id', (req, res) => {
        // variables
        const dataPath = `./data/${req.params['id']}.json`;

        fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }

            res.send(JSON.parse(data));
        });
    });

};

module.exports = metaRoutes;
