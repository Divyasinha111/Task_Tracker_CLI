const Task = require("../models/Task");

module.exports = async function listTasks(filter) {
  let query = {};
  if (["todo", "in-progress", "done"].includes(filter)) {
    query.status = filter;
  }

  const tasks = await Task.find(query);
  if (tasks.length === 0) return console.log("No tasks found.");

  tasks.forEach(task => {
    console.log(`[${task.status}] (${task._id}) ${task.description}`);
  });
};
