# start

1. 启动数据库
2. npm start

# 项目架构

## views

views 层主要为前端代码逻辑

## routes

routes 层为服务端路由控制以及各项服务的实现

## DAO

DAO封装底层数据库方法为routes 层提供hooks函数

# 前端架构

react + antd + webpack

# 后端架构

koa + mysql + sequelize

## 后端接口

### 登陆 和 注册

/loginIn 

/register

入参皆为 一个JSON

{
  username: 'owen',
  password: 10234  
}

前端交互演示：(注册和登陆相同)

```
fetch('/loginIn', {
  method: 'POST',
  headers: {
       "Content-Type": "application/json"
  },
  credentials: 'include',
  body: JSON.stringify({username: 'mingsming',password: 12346})
}).then(d => {
  // do something
})
```

