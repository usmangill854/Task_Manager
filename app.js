const express = require('express')
const mongoose = require('mongoose')

const tasks = require('./routes/tasks')

const connectDB = require('./db/connect')
 const app = express()

const port = 3000
//middleware
app.use(express.json()) 

// const connectdb = async Mongoose.



app.get('/',(req,res) => {
    res.send('hello')
})

app.use('/api/v1/tasks',tasks)




const start = async() => {
    try{
        await connectDB()
    console.log('db connected')
    app.listen(port,()=>{
        console.log(`server is listining on port ${port}`)
        })
    
    }catch(err){
        console.log(err)
    }    

}

start()