import { useState } from "react";
import CustomForm from "./components/CustomForm";
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

  return (
    <div className="container">
      <header>
        <h1>My Task List</h1>
      </header>
      <CustomForm addTask={addTask} />
      {tasks && <TaskList tasks={tasks} deleteTask={deleteTask} />}
    </div>
  );
}

export default App;
