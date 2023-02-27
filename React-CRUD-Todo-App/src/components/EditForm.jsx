import { CheckIcon } from "@heroicons/react/24/solid";

const EditForm = () => {
  function handleFormSubmit(e) {
    e.preventDefault();
  }

  return (
    <div role="dialog" aria-labelledby="editTask">
      <form onSubmit={handleFormSubmit} className="todo">
        <div className="wrapper">
          <input
            id="editTask"
            className="input"
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
        <button type="submit" className="btn">
          <CheckIcon strokeWidth={2} height={24} width={24} />
        </button>
      </form>
    </div>
  );
};

export default EditForm;
