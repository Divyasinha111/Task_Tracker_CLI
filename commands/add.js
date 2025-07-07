const Task = require("../models/Task");

module.exports = async function addTask(description) {
  const task = new Task({ description });
  await task.save();
  console.log(`✅ Task added (ID: ${task._id})`);
};
