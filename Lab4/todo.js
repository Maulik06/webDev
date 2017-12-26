const mongoCollections = require("./mongoCollections");
const todoItems = mongoCollections.todoItems;
const uuidv4 = require('uuid/v4');

module.exports = {
  
  async  createTask(title, description)
  {
    if(!title) throw "You must provide title";
    if(!description) throw "You must provide description"
    if(typeof title !== 'string') throw "Title must be a String"
    if(typeof description !== 'string') throw "Description must be a String"
    if(title.length < 1 || description.length <1) throw "Title or Description can not be a null string"

    const todoCollection = await todoItems();
    const _id = uuidv4();

    let newTodo = {
      _id : _id,
      title : title,
      description : description,
      completed: false,
      completedAt: null 
    };

    const insertTodo = await todoCollection.insertOne(newTodo);
    if (insertTodo.insertedCount === 0) throw "Could not add todo";

    return await this.getTask(insertTodo.insertedId);
   },


   async  getAllTasks()
   {
        const todoCollection = await todoItems();
        const todos = await todoCollection.find({}).toArray();
        return todos;
   },


   async getTask(id){
    if (!id) throw "You must provide an id to search for";
    if(typeof id !== 'string') "ID must be valid string";
    if(id.length < 1) throw "ID can not be null string";

    const todoCollection = await todoItems();
    const todo = await todoCollection.findOne({ _id: id });
    if (todo === null) throw "No todo with this id";

    return todo;
  },

  async  completeTask(taskId)
  {
    if (!taskId) throw "You must provide an id to do for";
    if(typeof taskId !== 'string') "ID must be valid string";
    if(taskId.length < 1) throw "ID can not be null string";
    const todoCollection = await todoItems();
    const todo = await todoCollection.findOne({ _id: taskId });
    if (todo === null) throw "No todo with this id";

    if(todo.completed) return await this.getTask(taskId);
    
    let updateTodo ={
      _id: taskId,
      title : todo.title,
      description : todo.description,
      completed: true,
      completedAt: Date.now()
    };

    const newtodoCollection = await todoItems();
    const updateInfo = await newtodoCollection.updateOne({ _id: taskId }, updateTodo);
    if (updateInfo.modifiedCount === 0) {
      throw "could not update todo successfully";
    }

    return await this.getTask(taskId);

  },

  async  removeTask(id)
  {
    if (!id) throw "You must provide an id to remove for";
    if(typeof id !== 'string') "ID must be valid string";
    if(id.length < 1) throw "ID can not be null string";
    const todoCollection = await todoItems();
    const deletionInfo = await todoCollection.removeOne({ _id: id });

    if (deletionInfo.deletedCount === 0) {
      throw `Could not delete todo with id of ${id}`;
    }

  },


};
