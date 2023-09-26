import { useState, useEffect } from "react"
import Table from './Components/Table';
import './App.css';

const App = () => {

    const [input, setInput] = useState("")
    const [todoList, setToDoList] = useState([])
    const [isValidInput, setIsValidInput] = useState(1)
    const [isFullArray, setIsFullArray] = useState(0)
    const [errorMsg, setErrorMsg] = useState("")

    const specialChars = /[0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

    useEffect(() => {
        if(specialChars.test(input))  {
            setIsValidInput(false)
            setErrorMsg("Error: Invalid input")
        } else setIsValidInput(true)       
    }, [input])

    useEffect(() => {
        if(todoList.length > 4) {
            setIsFullArray(true)
            setErrorMsg("Error: List is full!")
        } else setIsFullArray(false)
    }, [todoList])

    const addTodo = () => {
        setToDoList([...todoList, input])
    }

    const deleteItem = (str) => {
        alert("Item " + str + " deleted!")
        todoList.splice(todoList.indexOf(str), 1)
        setToDoList([...todoList])
    }

    return(
        <>
            <input type="text" onChange={(e) => setInput(e.target.value)} style={{borderColor: (isValidInput && !isFullArray) ? "black" : "red"}} />&nbsp;
            <button onClick={addTodo} disabled={(isValidInput && !isFullArray) ? false : true}>Add To Do</button>
            {(isValidInput && !isFullArray) ? null : <p className="errorMsg">{errorMsg}</p>}
            <h1>To Do's:</h1>

            <Table todoList={todoList} deleteItem={deleteItem} />
        </>
    )

}

export default App;