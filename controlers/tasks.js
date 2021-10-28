const getAllTasks = (req,res) => {
    res.send('all itmes')
}
const createTask = (req,res) => {
    res.json(req.body)
}


const getTask = (req,res) => {
    res.json(req.param)
}

const updateTask = (req,res) => {
    res.json({id:req.param.id})
}

const deleteTask = (req,res) => {
    res.json({id:req.param.id})
}
module.exports= {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}   