import { useState } from "react";
import NewTaskBar from "./NewTaskBar";

export default function TasksBoard({ tasks, onDeleteTask, onCrossOut }) {
  const [taskCompleted, setTaskCompleted] = useState([]);

  function handleCrossOut(event) {
    event.target.classList.toggle("task-completed");
  }

  return (
    <div id="task-board">
      {tasks.map((task, index) => (
        <div className="task-container" key={index}>
        <div
          className={`task-element ${task.completed ? 'task-completed' : ''}`}
        //   onClick={(event) => {
        //     event.stopPropagation();
        //     handleCrossOut(event);
        //   }}
        onClick={() => onCrossOut(index)}
        >
          <span>{task.description}</span>
          
        </div>
        <button
        className="delete-button"
        onClick={(event) => {
            event.stopPropagation();
          onDeleteTask(index);
        }}
      >
        X
      </button>
      </div>
      ))}
    </div>
  );
}
