const Koa = require('koa');
const app = new Koa();
const sleep = require('sleep-promise');
const fs = require('mz/fs');
const SHARED_FILE = process.env.SHARED_FILE || '/tmp/shared.txt';

app.use(async ctx => {
  ctx.body = 'Hi!!!';
});



console.log('back service on 4000')
app.listen(4000);

setTimeout(async () => {
  while(true) {
    console.log('randomizing')
    let x = rnd();
    await fs.writeFile(SHARED_FILE, x)
    await sleep(3000)
  }
}, 0)

function rnd() {
  return Math.floor(Math.random() * 1000)
}
