
const { Pool } = require('muhb');
const { exist } = require('nodecaf').assertions;

module.exports = function({ post, get }){

    post('/event/:name', function({ headers, body, pipelines, params, res }){
        exist(params.name in pipelines, 'Unsupported event');
        pipelines[params.name].bind(new Pool())(headers, body);
        res.end();
    });

    get('/events', function({ pipelines, res }){
        res.end(JSON.stringify(Object.keys(pipelines)));
    });

}
