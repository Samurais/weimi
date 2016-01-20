/**
 * Test this weimi lib
 * @type {[type]}
 */
var assert = require('assert');
var Weimi = require('./index.js');
var config = require('./test.config.json');


/**
 * Call Weimi interface to send out a SMS message.
 * @param  {Weimi}  )             {               it('should send out a sms', function(done) {                  var sms [description]
 * @param  {[type]} function(err) {                                                                  done(err);                               });    });} [description]
 * @return {[type]}               [description]
 */
describe('#Weimi SMS module', function() {
    it('should send out a sms', function(done) {
        var sms = new Weimi({
            uid: config.uid,
            pas: config.pas
        });
        sms.sendMessage({
                cid: config.cid,
                mobile: config.mobile,
                content: config.content
            })
            .then(function() {
                done();
            }, function(err) {
                done(err);
            });

    });
});
