const { app , port } = require('./config');
const router = require('./routes');

app.use('/api', router);

const run = async () => {
    app.listen(port, () => {
        console.log('listening on port: ' + port)
    })
}

module.exports = run