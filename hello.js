/**
 * Created by cag on 2016/12/8.
 */
var koa = require('koa');
var app = koa();

app.use(function *() {
    console.log(111);
    this.cookies.set('name','CAG');
    this.body = 'hello koa333333!';
});

app.listen(3000);