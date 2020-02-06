const { AppServer } = require('nodecaf');
const api = require('./api');

module.exports = function init(routes){
    let app = new AppServer();
    app.name = 'letyouknow';
    app.version = '0.0.1';
    app.expose({ pipelines: routes || /* istanbul ignore next */ require('./routes') });
    app.api(api);
    return app;
}
