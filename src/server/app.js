const Koa = require('koa');
const app = new Koa();
const request = require('axios');
const fs = require('mz/fs');
const SHARED_FILE = process.env.SHARED_FILE || '/tmp/shared.txt';

app.use(async ctx => {
  let res = await request.get('http://localhost:4000');
  let rdm = await fs.readFile(SHARED_FILE)
  ctx.body = `Hello World. Back says(${res.data}). A random file says: ${rdm}`;
});

console.log('listening on 3000');
app.listen(3000);
