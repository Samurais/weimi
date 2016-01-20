/**
 * Weimi Utility
 * @type {[type]}
 */
var Q = require('q');
var SuperAgent = require('superagent');
var QueryString = require('querystring');
var _ = require('lodash');

module.exports = exports = Weimi;

function Weimi(cfg) {
    this.config = cfg;
}

/**
 * [sendMessage description]
 * @param  {[type]} data [description]
 * @return {[type]}      [description]
 */
Weimi.prototype.sendMessage = function(params) {
    var d = Q.defer();

    var postData = {
        cid: params.cid,
        p1: params.content,
        uid: this.config.uid,
        pas: this.config.pas,
        mob: params.mobile,
        type: 'json'
    };

    var content = QueryString.stringify(postData);

    /**
     * 短信下发接口二详情
     * http://www.weimi.cc/dev-sms.html
     * @param  {[type]} err  [description]
     * @param  {[type]} res) {                       if (err) {                d.reject(err);            } else {                console.log(res);                d.resolve();            }        } [description]
     * @return {[type]}      [description]
     */
    SuperAgent.post('http://api.weimi.cc/2/sms/send.html')
        .send(content)
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .set('Content-Length', content.length)
        .end(function(err, res) {
            if (err) {
                d.reject();
            } else {
                d.resolve();
            }
        });

    return d.promise;
}
