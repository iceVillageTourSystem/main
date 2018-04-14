module.exports = {
  isEmptyObject(obj) {
    return !Object.keys.length;
  },
  jsonResponse(ctx) {
    ctx.type = 'application/json;charset=utf-8';
    ctx.response.set('Content-type', 'application/json; charset=utf-8');
  },

  setSession(ctx, d) {
    let {id} = d;
    ctx.session.users[d.id] = Object.assign(d.dataValues);
  }
}