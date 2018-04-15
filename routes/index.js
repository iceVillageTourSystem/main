const router = require('koa-router')();
const {createUser, hasTheUser, checkIn} = require('../dao/user');

const fs = require('fs');
const path = require('path');

const {
  isEmptyObject,
  setSession,
  jsonResponse,
  htmlResponse
} = require('../toolfuncs.js');

const errid = require('../errorids');

router
  .get('/', (ctx, next) => {
    // 记录网站pv
    let n = ctx.session.views || 0;
    ctx.session.views = ++n;
    
    htmlResponse(ctx);
    ctx.body = fs.readFileSync(path.resolve(__dirname,'../views/index.html'));     

      // ctx.redirect('/loginAndRegister');
      // ctx.status = 301;
  })
  .redirect('/index', '/')
  .post('/checkLogin', async () => {
    // 从redis 内寻找对应的id 如果有说明有登陆
    // 没有则告诉前端弹出登录窗口
  })
  .post('/loginIn', async (ctx, next) => {
    let userId = ctx.cookies.get('id');
    let data = ctx.request.body;
    let result = {};

    let {username, password} = data;
    if(!isEmptyObject(data)) {
      await checkIn(username, password)
      .then(d => {
        if(d) {
          // 匹配成功
          result = {
            status: 0,
            msg: errid[0]
          }

          // 当前登录者写入cookie
          ctx.cookies.set('id', d.id);
          ctx.cookies.set('user', d.username);
          ctx.cookies.set('is_manager', '' + d.is_manager);
          setSession(ctx, d);
        } else {
          result = {
            status: 10003,
            msg: errid[10003]
          }  
        }
        ctx.body = result;
      })
    } else {
      ctx.body = {
        status: 10001,
        msg: errid[10001]
      }
    }
  })
  .post('/register', async (ctx, next) => {
    let data = ctx.request.body;
    if(!isEmptyObject(data)) {
      let {username, password, isManager} = data;
      await hasTheUser(username)
      .then(async function (r) {
          if(!r) {
            await createUser({
              username,
              password,
              isManager
            }).then(d => {
              console.log(`\n Create user done! The username was ${username} \n`);
              result = {
                status: 0,
                msg: errid[0]
              }  
            }).catch(err => {
              result = {
                status: 11111,
                msg: errid[11111]
              }
            })
        } else {
          console.log('\n It has a user who \'s name was ${username} \n');
          result = {
            status: 10002,
            msg: errid[10002]
          }  
        }
      })

      ctx.body = result;
    } else {
       ctx.body = {
        status: 10001,
        msg: errid[10001]
      }
    }
  })
  
  /* api router */
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

module.exports = router