const koa = require('koa')
const koaRouter = require('koa-router');
const path = require('path');
const render = require('koa-ejs');

const app = new koa();
const router = new koaRouter();

router.get('/', (ctx, next) => {
    ctx.body = 'test';
})
    .get('/:user', (ctx, next) => {
        console.log(ctx.params);
    });

app.use(router.routes())
    .use(router.allowedMethods());

app.listen(8080);