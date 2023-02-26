import { PlusIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

const CustomForm = () => {
  const [task, setTask] = useState("");

  function handleFormSubmit(e) {
    e.preventDefault();

    setTask("");
  }

  return (
    <form onSubmit={handleFormSubmit} className="todo">
      <div className="wrapper">
        <input
          id="task"
          className="input"
          value={task}
          onInput={(e) => setTask(e.target.value)}
          required
          autoFocus
          maxLength={60}
          placeholder="Enter Task"
          type="text"
        />
        <label className="label" htmlFor="task">
          Enter Task
        </label>
      </div>

      <button aria-label="Add Task" type="submit" className="btn">
        <PlusIcon />
      </button>
    </form>
  );
};

export default CustomForm;
