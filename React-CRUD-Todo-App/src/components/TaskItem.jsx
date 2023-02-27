import styles from "./cssmodules/TaskItem.module.css";

import {
  CheckIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";

import { useState } from "react";

export const TaskItem = ({ task, deleteTask }) => {
  const [isChecked, setIsChecked] = useState(task.checked);

  function handleCheckBoxChange() {
    setIsChecked(!isChecked);
  }
  return (
    <li className={styles.task}>
      <div className={styles["task-group"]}>
        <input
          onChange={handleCheckBoxChange}
          className={styles.checkbox}
          type="checkbox"
          checked={isChecked}
          name={task.name}
          id={task.id}
        />
        <label className={styles.label} htmlFor={task.id}>
          {task.name}
          <p className={styles.checkmark}>
            <CheckIcon strokeWidth={2} width={24} height={24} />
          </p>
        </label>
      </div>

      <div className={styles["task-group"]}>
        <button aria-label={`Update ${task.name} Task`} className="btn">
          <PencilSquareIcon width={24} height={24} />
        </button>

        <button
          aria-label={`Delete ${task.name} Task`}
          className={`btn ${styles.delete}`}
          onClick={() => deleteTask(task.id)}
        >
          <TrashIcon width={24} height={24} />
        </button>
      </div>
    </li>
  );
};
