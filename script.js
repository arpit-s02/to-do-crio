const addTasksToDOM = (tasks) => {
  const tasksList = document.querySelector("#tasksList");

  tasksList.innerHTML = "";

  tasks.forEach((task, idx) => {
    const li = document.createElement("li");

    li.innerHTML = `
    <input type="checkbox" name="task-${idx}" id="task-${idx}" data-task = "${task}">
    <label for="task-${idx}">${task}</label>
    `;

    tasksList.append(li);
  });
};

const addStyleToCompletedTasks = (completedTasks) => {
  completedTasks.forEach((task) => {
    const checkbox = document.querySelector(`input[data-task = "${task}"]`);
    checkbox.checked = true;
  });
};

export { addTasksToDOM, addStyleToCompletedTasks };
