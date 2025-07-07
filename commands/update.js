const Task = require("../models/Task");

module.exports = async function updateTask(id, newDescription) {
  const task = await Task.findById(id);
  if (!task) return console.log("❌ Task not found");

  task.description = newDescription;
  task.updatedAt = new Date();
  await task.save();
  console.log("✅ Task updated");
};
