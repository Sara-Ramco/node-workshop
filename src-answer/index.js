const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const route = require('koa-route');
const database = require('./fakeDatabase');

const app = new Koa();
const PORT = process.env.PORT || 3000;

app.use(bodyParser());


// Controllers //
const createUserController = async (ctx, id) => {
  await database.set(id, ctx.request.body);
  ctx.body = `User ${id} created`;
};

const getUserController = async (ctx, id) => {
  const user = await database.get(id);
  ctx.body = user;
};

const willThrowErrorController = async (ctx) => {
  throw new Error('This is an error message');
};

// Middleware //
const correlationIdMiddleware = async (ctx, next) => {
  const correlationId = Math.random().toString(36).substr(2, 10); // random string of length 10
  ctx.correlationId = correlationId;
  await next();
};

const loggerMiddleware = async (ctx, next) => {
  console.log(`${ctx.correlationId}: ${ctx.request.method} ${ctx.request.path}`);
  await next();
  console.log(`${ctx.correlationId}: HTTP ${ctx.response.status} - ${JSON.stringify(ctx.response.body)}`);
};

const authMiddleware = async (ctx, next) => {
  const key = 'secretKey';
  if (ctx.request.get('X-Api-Key') !== key) {
    ctx.status = 400;
    ctx.body = 'Bad Request';
    return;
  }

  await next();
};

const errorMiddleware = async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    console.log(`${ctx.correlationId}:`, err);
    ctx.status = 500;
    ctx.body = 'Internal error, see logs for more info';
  }
};


app.use(correlationIdMiddleware);
app.use(loggerMiddleware);
app.use(errorMiddleware);
app.use(authMiddleware);
app.use(route.post('/api/user/:id', createUserController));
app.use(route.get('/api/user/:id', getUserController));
app.use(route.get('/willThrowError', willThrowErrorController));

app.listen(PORT);
console.log(`Listening on localhost:${PORT}`);
