import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import Router from 'koa-router';
import send from 'koa-send';
import serve from 'koa-static';

const app = new Koa();
const router = new Router();
app.use(bodyParser());
app.use(serve(`${__dirname}/public`));

router.get('/', async (ctx) => {
  ctx.body = serve('index.ts');
});

app.use(router.routes());
app.use(function* index() {
  yield send(this, `${__dirname}/index.html`);
});

app.listen(3000).on('listening', () => console.log('Server running on port 3000'));
