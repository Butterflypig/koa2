import Router from 'koa-router'
import {query} from './../model/pool.js'
// import {query} from '@/model/pool.js'

export const router = new Router();

async function getData(ctx) {
    ctx.body = await query()
}


router.get('/', async (ctx) => {
    ctx.body = 'index'
})


router.get('/data', getData)
