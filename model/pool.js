import {config} from './mysql.config.js'
import mysql from 'mysql'

const pool = mysql.createPool(config)
const SQL = 'select * from student'

export const query = ()=> {
    return new Promise((resolve, reject) => {
        pool.query(SQL, (error, result)=> {
            if(error) {
                reject(error)
            }else {
                resolve(result)
            }
        })
    })
}

