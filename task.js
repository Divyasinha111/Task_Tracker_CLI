require("dotenv").config();
const connectDB = require("./config/db");

const addTask = require("./commands/add");
const updateTask = require("./commands/update");
const deleteTask = require("./commands/delete");
const markStatus = require("./commands/markStatus");
const listTasks = require("./commands/list");

const [, , command, ...args] = process.argv;

async function main() {
  await connectDB();

  switch (command) {
    case "add":
      await addTask(args.join(" "));
      break;
    case "update":
      await updateTask(args[0], args.slice(1).join(" "));
      break;
    case "delete":
      await deleteTask(args[0]);
      break;
    case "mark-in-progress":
      await markStatus(args[0], "in-progress");
      break;
    case "mark-done":
      await markStatus(args[0], "done");
      break;
    case "list":
      await listTasks(args[0]);
      break;
    default:
      console.log(`❌ Unknown command: ${command}`);
      console.log(`
Available commands:
  • add <task>
  • update <taskId> <updated task>
  • delete <taskId>
  • mark-in-progress <taskId>
  • mark-done <taskId>
  • list [status]
      `);
  }

  process.exit();
}

main();
