const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();

app.use(async (ctx, next) => {
  try {
    await next();
  }
  catch (error) {
    ctx.status = 500;
    ctx.message = error.message || 'Sorry, error occured';
  }
});

const router = new Router;

router.get('/products', async ctx => {
  // await something (like a DB query)
  ctx.body = 'Get Products';
});
router.post('/products', async ctx => {
  // await ...
  ctx.body = 'Post Product';
});

router.get('/products/:id', async ctx => {
  ctx.body = `Getting product with ID ${ctx.params.id}`;
});

app.use(router.routes());
app.use(async ctx => ctx.body = 'Hello Koa!');
app.listen(3000, () => console.log('Magic happens on port 3000'));