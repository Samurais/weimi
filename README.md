# 微米 Node API


> 微米
短信彩信接口平台服务商
http://weimi.cc/dev.html


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