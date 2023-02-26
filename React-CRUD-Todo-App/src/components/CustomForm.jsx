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
    </form>
  );
};

export default CustomForm;
