import styles from "./cssmodules/TaskItem.module.css";

import { CheckIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export const TaskItem = ({ task }) => {
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
    </li>
  );
};
