import { useState } from "react"
function Todolist(){
    const[input, setInput]=useState("");
    const[tasks, setTasks]=useState([]);
    const[count, setCount]=useState(0);
    const[error, setError]=useState("");
    const[complete, setComplete]=useState(0);
    const[incomplete, setIncomplete]=useState(0)
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
function handleComplete(index){
    if(tasks.index.complete){
    setCount(count-1)
    setComplete(complete+1) 
}}
function handleIncomplete(){
    setIncomplete(incomplete + 1)
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
        <button onClick={addTasks} className="todo-button">
          Add
        </button>
        <p>{error}</p>
        <ul className="todo-list">
          {tasks.map((task, index) => (
            <li key={index} className="todo-item">
              {task}
              <div>
                <button
                  onClick={() => deleteTask(index)}
                  className="delete-button"
                >
                  Remove
                </button>
                <button onClick={()=>handleComplete(index)}>✅</button>
                <button onClick={handleIncomplete}>❎</button>
              </div>
            </li>
          ))}
        </ul>
        <div>
          <p>Number of Tasks to be done:{count}</p>
          <p>Number of Task Complete:{complete}</p>
          <p>Incomplete tasks:{incomplete}</p>
        </div>
      </div>
    );
}
export default Todolist;