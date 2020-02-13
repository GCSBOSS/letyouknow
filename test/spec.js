const assert = require('assert');
const http = require('http');
const { EventEmitter } = require('events');
const { context } = require('muhb');
const init = require('../lib/main');

process.env.NODE_ENV = 'testing';

let
    app, base = context('http://localhost:9876'),
    gotHook = new EventEmitter(),
    mockServer = http.createServer(function(req, res){
        gotHook.emit(req.url);
        res.end();
    });

before(function(){
    mockServer.listen(1234);
});

beforeEach(async function(){
    app = init({
        foobar(){
            this.post('http://localhost:1234/foobar');
        },
        bahbaz(headers, body){
            assert.strictEqual(body, 'heyho');
            assert.strictEqual(headers.test, 2);
        }
    });
    await app.start();
});

afterEach(async function(){
    await app.stop();
});

after(function(){
    mockServer.close();
});

describe('LetYouKnow', function(){

    describe('Triggering an event', function(){

        it('Should fail when event is not supported', async function(){
            let { assert } = await base.post('event/weird');
            assert.status.is(404);
            assert.body.contains('Unsupported');
        });

        it('Should trigger event logic', function(done){
            base.post('event/foobar').then(res => res.assert.status.is(200));
            gotHook.on('/foobar', done);
        });

        it('Should expose headers and body to event logic', async function(){
            await base.post('event/bahbaz', { 'test': 2 }, 'heyho');
        });

    });

    describe('Listing supported events', function(){

        it('Should return the events available in the routes file', async function(){
            let { assert } = await base.get('events');
            assert.status.is(200);
            assert.body.contains('"foobar"');
        });

    });

});
