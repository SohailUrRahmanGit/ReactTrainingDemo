import { useEffect, useState } from "react";


const ToDoList = () => {

    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);
    useEffect( () => {

    }, [task]);

     const addTask = () => {
        if (task.trim() === "") return;   
        console.log(task);
        setTasks( [...tasks, task ] );
        console.log(tasks);
        setTask("");
    }


    return (<div> 
        <h2> To Do List Component </h2>
        <input value={task} onChange= { (e) => setTask(e.target.value) } type="text" placeholder="Enter a task" />
        <button onClick={ addTask }> Add Item </button>
        <ul>
            { tasks.map( (t, index) => (
                <li key={index}>{t}</li>
            ) ) }
        </ul>
        </div>
    ); 
}
export default ToDoList;