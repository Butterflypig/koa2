import Koa from 'koa'
import {router} from './router/index.js'


const app = new Koa()
app.use(router.routes())

app.listen(3000, ()=> {
  console.log('服务启动');
})
