const Koa = require('koa');
const app = new Koa();

// bodyparser
const bodyparser = require('koa-bodyparser');
app.use(bodyparser({
  onerror: function (err, ctx) {
    ctx.throw('body parse error', err);
  }
}));

// router层
const router = require('koa-router')();
const indexRouter = require('./routes/index');
const apiRouter = require('./routes/api');

app.use(indexRouter.routes(), indexRouter.allowedMethods())
   .use(apiRouter.routes(), apiRouter.allowedMethods());

router.get("*", (req, res) => {
  res.end("404!!!!");
});


app.listen(3000, () => console.info('system was ready now!'));