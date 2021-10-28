const express = require('express')
const mongoose = require('mongoose')

const tasks = require('./routes/tasks')
const notFound = require('./middleware/not-found')
const errorHandler = require('./middleware/error-handler')

const connectDB = require('./db/connect')
require('dotenv').config()
 const app = express()

const port = 3000
//middleware
app.use(express.json()) 
app.use(express.static('./public'))
// const connectdb = async Mongoose.
// app.use(notFound)
app.use(errorHandler)
 

app.use('/api/v1/tasks',tasks) 
  



const start = async() => {
    try{
        await connectDB(process.env.MONGO_URL)
    console.log('db connected')
   }catch(err){
        console.log(err)
    }    
}
app.listen(port,()=>{
    console.log(`server is listining on port ${port}`)
    })

start()