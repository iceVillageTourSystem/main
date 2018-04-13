const router = require('koa-router')();
const fs = require('fs');
const path = require('path');

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
  })
// .post('/register', async (ctx, next) => {
//   let data = ctx.request.body;
//   if(Object.keys(data).length) {
//     let {username, password, isManager} = data;
//     if(!hasTheUser(username)) {
//       createUser({
//         username,
//         password,
//         isManager
//       }).then(d => {
//         console.log(`create user done the username was ${username}`);
//         result = {
//           status: 0,
//           msg: errid(0)
//         }  
//       }).catch(err => {
//         result = {
//           status: 11111,
//           msg: errid(11111)
//         }
//       })
//     } else {
//       result = {
//         status: 10002,
//         msg: errid(10002)
//       }  
//     } 
    
//   } else {
//      result = {
//       status: 10001,
//       msg: errid(10001)
//     }
//   }

//   ctx.body = result;
// });

module.exports = router;