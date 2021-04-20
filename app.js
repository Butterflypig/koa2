import Koa from 'koa'
import {router} from './router/index.js'

let a = 2;

const app = new Koa()
app.use(router.routes())

app.listen(3000, ()=> {
  console.log('服务启动');
})


log('123')