


const Koa = require('koa');
const app = new Koa();

app.use(async (ctx, next) => {
    await next();
    console.log("one");
});

app.listen(3000);
