const router = require('koa-router')();
const {createUser, hasTheUser, checkIn} = require('../dao/user');

const fs = require('fs');
const path = require('path');

const {isEmptyObject} = require('../toolfuncs.js');
const errid = require('../errorids');

router
  .get('/', (ctx, next) => {
    ctx.type = 'text/html;charset=utf-8';
    ctx.response.set('Content-type', 'text/html;charset=utf-8');
    ctx.body = fs.readFileSync(path.resolve(__dirname,'../views/index.html'));
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
});

module.exports = router;