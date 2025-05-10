
const initialTasks = [
  {
    id: 1,
    title: "Launch Epic Career",
    description: "Create a killer Resume",
    status: "todo",
  },
  {
    id: 2,
    title: "Master JavaScript",
    description: "Get comfortable with the fundamentals",
    status: "doing",
  },
  {
    id: 3,
    title: "Contribute to Open Source Projects",
    description: "Gain practical experience and collaborate with others in the software development community",
    status: "done",
  },
];


const tasks = [...initialTasks];

while (true) {
  
  if (tasks.length >= 6) {
    alert("There are enough tasks on your board, please check them in the console.");
    break;
  }

  
  const title = prompt("Enter task title (or leave empty to finish):");
  if (title === "" || title === null) break;

  // Prompt for task description
  const description = prompt("Enter task description:");

  // Prompt for task status and validate it
  let status = prompt("Enter task status (todo, doing, done):").toLowerCase();
  while (status !== "todo" && status !== "doing" && status !== "done") {
    alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
    status = prompt("Enter task status (todo, doing, done):").toLowerCase();
  }

  // Generate the next ID based on the current number of tasks
  const newId = tasks.length + 1;

  // Create and add the new task object
  const newTask = { id: newId, title, description, status };
  tasks.push(newTask);
}

// Filter tasks with status "done"
const completedTasks = tasks.filter(task => task.status === "done");

// Log all tasks with a label
console.log("All tasks:", tasks);

// Log completed tasks with a label
console.log("Completed tasks:", completedTasks);