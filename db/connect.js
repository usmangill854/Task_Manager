const mongoose = require('mongoose')



const connectDB =(url) => {
    return (mongoose.connect(url)
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
 