const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  ctx.body = 'Hi!!!';
});

console.log('back service on 4000')
app.listen(4000);

