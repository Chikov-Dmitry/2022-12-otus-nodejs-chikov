import mongoose from 'mongoose'
import * as dotenv from 'dotenv'


dotenv.config()
mongoose.set('strictQuery', true)

const DB_URL = process.env["DB_URL"]
export const startDB = async function () {
    try {
        if(!DB_URL) throw new Error('DB_URL undefined')
        await mongoose.connect(DB_URL)
        console.log('Connected to DB')

    } catch (e) {
        throw e
    }
}


