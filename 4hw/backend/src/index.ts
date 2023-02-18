import * as dotenv from 'dotenv'
import express from 'express'
import cookieParser  from 'cookie-parser'
import cors from 'cors'
import {userRouter} from "./routers/user";
import {authRouter} from "./routers/auth";
import {startDB} from "./db";
import errorMiddleware from "./middlewares/error-middleware";

dotenv.config()
const PORT = process.env.PORT || 3000
const PATH_PREFIX = process.env["API_PATH_PREFIX"]

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors({
  credentials: true,
  origin: process.env.CLIENT_URL
}))

app.use(`/${PATH_PREFIX}`, userRouter)
app.use(`/${PATH_PREFIX}/auth`, authRouter)

app.use(errorMiddleware)

const start = async ()=>{
  try{
    await startDB()
    app.listen(PORT, ()=>{
      console.info(`server listening on ${PORT} port`)
    })
  }catch (e) {
    throw e
  }
}

start()

