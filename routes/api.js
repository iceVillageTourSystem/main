// 提供各种api

const router = require('./initRoute');
const errid = require('../errorids');
const {jsonResponse} = require('../toolfuncs');

router
  .get('/owen', async (ctx, next) => {
    jsonResponse(ctx);
    ctx.body = {
      "fuck": "ie"    
    };
  })
  // 最近保持会话的人数
  .get('/nowViews', ctx => {
    jsonResponse(ctx);
    ctx.body = {
      status: 0,
      msg: errid[0],
      datas: Object.keys(ctx.session.users).length
    }
  })


module.exports = router;