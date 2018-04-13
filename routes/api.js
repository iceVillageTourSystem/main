// 提供各种api

const router = require('koa-router')();
const {createUser, hasTheUser} = require('../dao/user');
const errid = require('../errorids');

router.get('/owen', async (ctx, next) => {
  ctx.type = 'application/json;charset=utf-8';
  ctx.response.set('Content-type', 'application/json; charset=utf-8');
  ctx.body = {
    "fuck": "ie"    
  };
});


module.exports = router;