const Task = require('../models/task')
const asyncWrapper = require('../middleware/async')
const{createCustomError} = require('../errors/custom-error')
const getAllTasks = asyncWrapper(   async (req,res) => {
    
        const tasks=await Task.find()
        res.status(201).json({tasks:tasks})
    
}
)
const createTask =  asyncWrapper( async (req,res) => {
    const task = await Task.create(req.body)
    res.status(201).json({task})
  
})

const getTask = asyncWrapper( async(req,res,next) => {
    const oneTask =await Task.findById(req.params.id)
    console.log(req.params.id )
    if(!oneTask){
    return next(createCustomError('no task with this is',404))
    // return res.status(404).json({msg:`no task with this id: ${req.params.id}`})
}

        res.status(200).json({oneTask})
 
}
)
const updateTask =  asyncWrapper( async (req,res) => {
          const update = await Task.findByIdAndUpdate(req.params.id,{
              name:req.body.name,
              completed: req.body.completed
          },{
              new:true,
              runValidators:true
          }
          )
          if(!update){
            return next(createCustomError('no task with this is',404))
        }
          res.status(200).json(update)  
     
 
 }
)
const deleteTask = asyncWrapper( async (req,res) => {
         const task = await Task.findByIdAndDelete(req.params.id)
        if(!task){
            return next(createCustomError('no task with this is',404))
        }
        else res.status(200).json('task deleted')
     
}
)
module.exports= {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
     
}   