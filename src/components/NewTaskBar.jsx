import { useState } from "react";
import "./style.css"

export default function NewTaskBar({onAddTask}){

    const [task, setTask] = useState('');

    function handleAddTask(event){
        event.preventDefault();
        onAddTask(task);
        setTask('');
    }

    return(
        <div id="new-task-bar">
            <form id="addTaskForm" onSubmit={handleAddTask}>
                <input id="addTaskTxt" type="text" value={task} onChange={(e) => setTask(e.target.value)} placeholder="New task..."/>
                <button id="addTaskBtn" type="submit">+</button>
            </form>
        </div>
    );
}