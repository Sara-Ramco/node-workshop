const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const route = require('koa-route');
const database = require('./fakeDatabase');

const app = new Koa();
const PORT = process.env.PORT || 3000;

app.use(bodyParser());

const controller = async (ctx, name) => {
  ctx.body = `Hello ${name}`;
};

app.use(route.get('/greeting/:name', controller));
app.listen(PORT);
