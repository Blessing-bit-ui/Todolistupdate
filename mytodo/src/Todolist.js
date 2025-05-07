import { useState } from "react"
function Todolist(){
    const[input, setInput]=useState("");
    const[tasks, setTasks]=useState([]);
    const[count, setCount]=useState(0);
    const[error, setError]=useState("");
    const[complete, setComplete]=useState(0);
    const[incomplete, setIncomplete]=useState(0);
    const[completedIndexes, setCompletedIndexes]=useState([])
    const[incompleteIndexes, setIncompletedIndexes]=useState([])
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
  if(!completedIndexes.includes(index)){
    setComplete(complete+1);
    setCount(count-1);
    setCompletedIndexes([...completedIndexes, index])
  }
}
function handleIncomplete(index){
if(!incompleteIndexes.includes(index)){
   setIncomplete(incomplete + 1)
   setCount(count-1)
   setIncompletedIndexes([...incompleteIndexes, index])
  }
}

    return (
      <div className="container">
        <h1 style={{ textAlign: "center" }}>Todo List</h1>
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
        <p style={{ color: "red", fontSize: "15px", fontStyle: "italic" }}>
          {error}
        </p>

        <ul className="todo-list">
          {tasks.map((task, index) => (
            <li key={index} className="todo-item">
              {task}
              <div>
                <button
                  onClick={() => deleteTask(index)}
                  className="delete-button"
                >
                  ❎
                </button>
                <button
                  onClick={() => handleComplete(index)}
                  className="status-button"
                >
                  ✅
                </button>
                <button
                  onClick={() => handleIncomplete(index)}
                  className="status"
                >
                  Incomplete
                </button>
              </div>
            </li>
          ))}
        </ul>
        <div>
          <p>Number of Tasks to be done:{count}</p>
          <p>Number of Task Complete:{complete}</p>
          <p>Number of Task InComplete:{incomplete}</p>
        </div>
      </div>
    );
}
export default Todolist;