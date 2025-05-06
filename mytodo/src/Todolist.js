import { useState } from 'react'
function Todolist(){
    const[input, setInput]=useState("")
    const[tasks, setTasks]=useState([])
    const[count, setCount]=useState(0)

    function addTasks(){
        if(input !==""){
        setTasks(...tasks, input)
        setCount(count+1)
        setInput("")
    }
}
    return(
        <div>
            <input placeholder="Enter Task"
            value={tasks}
            type="text"
            onChange={e=>setInput(e.targetvalue)}
                />
                <button onClick={addTasks}>Add</button>
        <ul>
            {tasks.map((task, index)=>(
                <li key={index}>{task}</li>
            ))}
        </ul>
        </div>
    )
}
export default Todolist;