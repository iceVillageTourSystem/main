const path = require('path');
const Koa = require('koa');
const app = new Koa();

// bodyparser
const bodyparser = require('koa-bodyparser');
app.use(bodyparser({
  onerror: function (err, ctx) {
    ctx.throw('body parse error', err);
  }
}));

// session 会话控制
const session = require('koa-session');
const sessionConfig = require('./sessionConfig')
app.keys = ['secret super star'];
app.use(session(sessionConfig, app));
app.use(async (ctx, next) => {
  if(!ctx.session.users) {
    ctx.session.users = {};
  }

  await next();    
})

// router层
const router = require('koa-router')();
const initRouter = require('./routes/index');

app.use(initRouter.routes(), initRouter.allowedMethods())

router.get("*", (ctx, next) => {
  ctx.body = "404!!!!";
});

// 处理静态文件
const serve = require('koa-static');
app.use(serve(path.resolve(__dirname, 'dist')))
   .use(serve(path.resolve(__dirname, 'node_modules')))
   .use(serve(path.resolve(__dirname, 'views')))

app.listen(3000, () => console.info('system was ready now!'));