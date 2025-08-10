# Task Tracker CLI (Node.js + MongoDB)

A command-line task tracker built with **Node.js**, **MongoDB**, and **Mongoose**.  
Easily add, update, delete, and list your tasks — all stored in a MongoDB database.  

**Project URL (compulsory):** https://roadmap.sh/projects/task-tracker

---

## Concepts

- **JavaScript (Node.js)**
- **CLI Tools**
- **MongoDB**
- **CRUD Operations**
- **Mongoose (ODM)**
- **Error Handling**

---

## Technologies Used

- Node.js  
- MongoDB  
- Mongoose  
- `process.argv` (to take CLI input from the user)

---

## Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd task_cli_node

2. Install dependencies: npm install.

3. Make sure MongoDB is running locally or update the connection string in your code to point to your MongoDB server.

How to Run
Run the CLI commands from the task_cli_node directory:

# Add a new task
node task.js add "Buy Books"

# Delete a task
node task.js delete "Buy Books"

# List all tasks
node task.js list

# List all tasks with status = done
node task.js list done

# Mark a task as done
node task.js mark-done "Buy Books"
