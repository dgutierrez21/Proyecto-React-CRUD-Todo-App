import styles from "./cssmodules/TaskItem.module.css";

import { CheckIcon } from "@heroicons/react/24/outline";

export const TaskItem = ({ task }) => {
  return (
    <li className={styles.task}>
      <div className={styles["task-group"]}>
        <input
          className={styles.checkbox}
          type="checkbox"
          checked={task.checked}
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
