const addTasksToDOM = (tasks) => {
  const tasksList = document.querySelector("#tasksList");

  tasksList.innerHTML = "";

  tasks.forEach((task, idx) => {
    const li = document.createElement("li");

    li.innerHTML = `
    <input type="checkbox" name="task-${idx}" id="task-${idx}" />
    <label for="task-${idx}"> ${task} </label>
    `;

    tasksList.append(li);
  });
};

export { addTasksToDOM };
