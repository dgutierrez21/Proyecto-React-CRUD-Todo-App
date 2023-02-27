import { useState } from "react";
import CustomForm from "./components/CustomForm";
import EditForm from "./components/EditForm";
import { TaskList } from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  function addTask(task) {
    console.log(task);

    setTasks([...tasks, task]);
  }

  function deleteTask(id) {
    setTasks(tasks.filter((t) => t.id !== id));
  }

  function toggleTask(id) {
    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, checked: !t.checked } : t))
    );
  }

  return (
    <div className="container">
      <header>
        <h1>My Task List</h1>
      </header>
      <EditForm />
      <CustomForm addTask={addTask} />
      {tasks && (
        <TaskList
          tasks={tasks}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
        />
      )}
    </div>
  );
}

export default App;
