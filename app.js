const Koa = require('koa');
const app = new Koa();

// router
const router = require('koa-router')();
const indexRouter = require('./routes/index');
const apiRouter = require('./routes/api');

app.use(indexRouter.routes(), indexRouter.allowedMethods());
app.use(apiRouter.routes(), apiRouter.allowedMethods());


router.get("*", (req, res) => {
  res.end("404!!!!");
});

app.listen(3000, () => console.info('system was ready now!'));