const Koa = require('koa');
const app = new Koa();
const request = require('axios');


app.use(async ctx => {
  let res = await request.get('http://localhost:4000');
  ctx.body = `Hello World. Back says(${res.data})`;
});

console.log('listening on 3000');
app.listen(3000);

