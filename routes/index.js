const router = require('koa-router')();

router.get('/index', async (ctx, next) => {
  ctx.body = 'hello world';
});

module.exports = router;