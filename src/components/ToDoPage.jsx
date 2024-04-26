import { useState, useEffect } from "react";
import "./style.css"
import TasksBoard from "./TaskBoard";
import NewTaskBar from "./NewTaskBar";

export default function ToDoPage(){

    const [taskList, setTaskList] = useState(() => {
        const savedTasks = localStorage.getItem('tasks');
        return savedTasks ? JSON.parse(savedTasks) : [];
    });

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(taskList));
    }, [taskList]);


    function addTask(newTaskDescription){
        if (newTaskDescription){
            const newTask = {
                description: newTaskDescription,
                completed: false
            };
            setTaskList(previousTasks => [...previousTasks, newTask]);
        }
    }

    function deleteTask(index){
        setTaskList(previousTasks => previousTasks.filter((task, i) => i !== index));
    }

    function toggleTaskCompletion(index){
        setTaskList(previousTasks => previousTasks.map((task, i) => 
        i === index ? {...task, completed: !task.completed} : task
    ));
    }



    return(
        <div id="main-page">
            <NewTaskBar onAddTask={addTask}></NewTaskBar>
            <TasksBoard tasks={taskList} onDeleteTask={deleteTask} onCrossOut={toggleTaskCompletion}></TasksBoard>
        </div>
    );
}