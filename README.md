[![chatoper banner][co-banner-image]][co-url]

[co-banner-image]: https://user-images.githubusercontent.com/3538629/42217321-3d5e44f6-7ef7-11e8-94e7-1574bfa1dbb8.png
[co-url]: https://www.chatopera.com


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
