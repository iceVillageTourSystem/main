module.exports = {
  key: 'koa:sess',
  maxAge: 86400000, // 单位为ms 默认为1天
  overwrite: true,
  httpOnly: true, // cookie 是否不允许前端使用js进行修改
  signed: true,
  rolling: false,
  renew: false
}