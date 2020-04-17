const { AppServer } = require('nodecaf');
const api = require('./api');

module.exports = function init(routes){
    let app = new AppServer({ port: 9876 });
    let pipelines = routes || /* istanbul ignore next */ require('./routes');
    app.expose({ pipelines });
    app.api(api);
    return app;
}
