import express from "express"
import router from "./routes/todo.js"
import dotenv from 'dotenv'
import dbConnect from "./config/db.js"
import cors from 'cors'

dotenv.config()

dbConnect()

const app = express()
 
app.use(cors("*"))

app.use(express.json())

app.use('/api', router)

app.listen(4000, (req, res) => {

    console.log("server connected port 4000")

}) 