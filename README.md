# 微米 Node API

## Get started

```
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
```


### License

MIT