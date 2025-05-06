import { useState } from "react"
function Todolist(){
    const[input, setInput]=useState("")
    const[tasks, setTasks]=useState([])
    const[count, setCount]=useState(0)
    const[error, setError]=useState("")
    const maxTasks=10;

    function addTasks(){
        if(input !==""){
        setTasks([...tasks, input])
        setCount(count+1)
        setInput("")
    }

    if(input==""){
        setError("Task is required");
        return;
    }
    if(tasks.length>=maxTasks){
        setError(`You can only add up to ${maxTasks} tasks`)
    }
    setError("")
}
function deleteTask(index){
    const newTasks=tasks.filter((_, i)=> i !==index);
    setTasks(newTasks);
    setCount(count - 1 );
}
    return (
      <div className="container">
        <h1>Todo List</h1>
        <input
          placeholder="Enter Task"
          max="10"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="todo-input"
        />
        <button onClick={addTasks}>Add</button>
        <p>{error}</p>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {task} <button onClick={()=>deleteTask(index)}>X</button>{" "}
            </li>
          ))}
        </ul>
        <p>Number of Tasks to be done:{count}</p>
      </div>
    );
}
export default Todolist;