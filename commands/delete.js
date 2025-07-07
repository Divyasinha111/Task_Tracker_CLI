const Task = require("../models/Task");

module.exports = async function deleteTask(taskName) {
  const deleted = await Task.findOneAndDelete({ description: taskName });

  if (deleted) {
    console.log(`✅ Task "${taskName}" deleted`);
  } else {
    console.log(`⚠️ Task "${taskName}" not found`);
  }
};
