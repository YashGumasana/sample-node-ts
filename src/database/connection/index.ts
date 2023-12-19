import config from 'config'
import mongoose from 'mongoose'
import express from 'express'

const dbUrl: any = config.get('db_url');
const mongooseConnection = express()

mongoose.connect(
    dbUrl
).then(() =>
    console.log('Database successfully connected')
).catch(err => console.log(err))

export { mongooseConnection }