import { useState } from "react";
import CustomForm from "./components/CustomForm";

function App() {
  const [tasks, setTasks] = useState([]);
  function addTask(task) {
    console.log(task);

    setTasks([...tasks, task]);
  }
  return (
    <div className="container">
      <header>
        <h1>My Task List</h1>
      </header>
      <CustomForm addTask={addTask} />
    </div>
  );
}

export default App;
