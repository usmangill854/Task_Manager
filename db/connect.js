const mongoose = require('mongoose')

const connectionString = 'mongodb+srv://usman:1234@cluster0.wuqqy.mongodb.net/TaskManager?retryWrites=true&w=majority'


const connectDB =() => {
    return (mongoose.connect(connectionString)
    )
}
module.exports = connectDB
 
 

// mongoose
// .connect(connectionString,{
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false,
//     useCreateIndex: true
// })
// .then(()=>console.log('connected to DB'))
// .catch((err)=>(console.log(err)))
 