const express = require('express')
const tasks = require('./routes/tasks')
const app = express()

const port = 3000
//middleware
app.use(express.json())

app.get('/',(req,res) => {
    res.send('hello')
})

app.use('/api/v1/tasks',tasks)


app.listen(port,()=>{
console.log(`server is listining on port ${port}`)
})
