import { PlusIcon } from "@heroicons/react/24/solid";

const CustomForm = () => {
  function handleFormSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleFormSubmit} className="todo">
      <div className="wrapper">
        <input
          id="task"
          className="input"
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
