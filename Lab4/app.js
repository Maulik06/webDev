const todoItems = require("./todo");
const connection = require("./mongoConnection");

try
{
main();
}catch(e)
{
  console.log(e);
}

async function main()
{
  const createdTask = await todoItems.createTask("Ponder Dinosaurs", "Has Anyone Really Been Far Even as Decided to Use Even Go Want to do Look More Like?");
  console.log("New Created Task 1: ");
  console.log(createdTask);

  const createdTask2 = await todoItems.createTask("Play Pokemon with Twitch TV", "Should we revive Helix?");
  console.log("New Created Task 2: ");
  console.log(createdTask2);

  let alltodoTasks = await todoItems.getAllTasks();
  console.log("All Tasks : ");
  console.log(alltodoTasks);

  await todoItems.removeTask(alltodoTasks[0]._id);
  console.log("Removed Task: "+alltodoTasks[0]._id);

  alltodoTasks = await todoItems.getAllTasks();
  console.log("All remaining Tasks : ");
  console.log(alltodoTasks);

  for(let i = 0;i<alltodoTasks.length;i++)
  {
    await todoItems.completeTask(alltodoTasks[i]._id);
  }

  alltodoTasks = await todoItems.getAllTasks();
  console.log("All Completed Tasks : ");
  console.log(alltodoTasks);


  const db = await connection();
  await db.close();

  console.log("Done!");
}