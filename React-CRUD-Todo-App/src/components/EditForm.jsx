import { CheckIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

const EditForm = ({ editedTask, updateTask, closeEditMode }) => {
  const [updatedTaskName, setUpdatedTaskName] = useState(editedTask.name);

  function handleFormSubmit(e) {
    e.preventDefault();

    updateTask({ ...editedTask, name: updatedTaskName });
  }

  useEffect(() => {
    const closeModalIfEscaped = (e) => e.key === "Escape" && closeEditMode();

    window.addEventListener("keydown", closeModalIfEscaped);

    return () => window.removeEventListener("keydown", closeModalIfEscaped);
  }, []);

  return (
    <div role="dialog" aria-labelledby="editTask">
      <form onSubmit={handleFormSubmit} className="todo">
        <div className="wrapper">
          <input
            id="editTask"
            className="input"
            value={updatedTaskName}
            onInput={(e) => setUpdatedTaskName(e.target.value)}
            required
            autoFocus
            maxLength={60}
            placeholder="Update Task"
            type="text"
          />
          <label className="label" htmlFor="editTask">
            Update Task
          </label>
        </div>
        <button
          aria-label={`Confirm edited task to now read ${updatedTaskName}`}
          type="submit"
          className="btn"
        >
          <CheckIcon strokeWidth={2} height={24} width={24} />
        </button>
      </form>
    </div>
  );
};

export default EditForm;
