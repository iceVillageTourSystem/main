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

// router.post('/register', async (ctx, next) => {
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