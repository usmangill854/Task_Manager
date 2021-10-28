const Task = require('../models/task')


const getAllTasks =async (req,res) => {
    try {
        const tasks=await Task.find()
        res.status(201).json({tasks:tasks})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}
const createTask =async (req,res) => {
   try {
    const task = await Task.create(req.body)
    res.status(201).json({task})
   } catch (error) {
       res.status(500).json({msg:error})
   }
}


const getTask = async(req,res) => {
    try {
        const oneTask =await Task.findById(req.params.id)
        console.log(req.params.id )
if(!oneTask){
    return res.status(404).json({msg:`no task with this id: ${req.params.id}`})
}

        res.status(200).json({oneTask})
    } catch (error) {
        res.status(500).json({err:error})

    }
}

const updateTask =async (req,res) => {
    try {
          const update = await Task.findByIdAndUpdate(req.params.id,{
              name:req.body.name,
              completed: req.body.completed
          },{
              new:true,
              runValidators:true
          }
          )
          if(!update){
              return res.satatus(404).json({msg:`no task with this id ${req.params.id}`})
          }
          res.status(200).json(update) 
    } catch (error) {
        res.status(500).json(error)
    }
 
 }

const deleteTask = async (req,res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id)
        if(!task){
            return res.status(404).json(`no task found in this id:${req.params.id}`)
        }
        else res.status(200).json('task deleted')
    } catch (error) {
        res.status(500).json({err:error})
    }
}
module.exports= {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
     
}   