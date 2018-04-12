const router = require('koa-router')();
const {createUser} = require('../dao/user');

router.get('/index', async (ctx, next) => {
  ctx.body = 'hello world';
  createUser({
    username: 'owen',
    password: '12346',
    isManager: 1
  }).then(d => {
    console.log('create user done');
  });
});

module.exports = router;