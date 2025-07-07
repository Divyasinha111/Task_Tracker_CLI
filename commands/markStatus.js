const Task = require("../models/Task");

module.exports = async function markStatus(id, status) {
  const task = await Task.findById(id);
  if (!task) return console.log("❌ Task not found");

  task.status = status;
  task.updatedAt = new Date();
  await task.save();
  console.log(`✅ Task marked as ${status}`);
};
