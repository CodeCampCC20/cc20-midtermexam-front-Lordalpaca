import React, { useEffect, useState } from "react";
import useAuthStore from "../stores/authstore";
import BtnForm from "../components/form/BtnForm";
import useToDoStore from "../stores/toDoStore";
import ToDoItem from "../components/toDoItem";

const initialTask = {
  taskName: "",
  userId: 1,
  completed: false,
}

function ToDoPage() {
  const [input, setInput] = useState(initialTask)
  const [toDo, setToDo] = useState(initialTask)
  const [inputError, setInputError] = useState(initialTask)

  const handleChange = (e) =>  {
    const {id, value} = e.target
    setInput((prev) => ({...prev, [id]: value}))
  }

  const userId = useAuthStore((state) => state.userId);

  const actionFetchToDos = useToDoStore(
    (state) => state.actionFetchToDos
  );

  const todos = useToDoStore((state) => state.todos);

  useEffect(() => {
    actionFetchToDos();
  }, []);

  console.log("todos", todos);

  const [checked, setChecked] = useState(false)

  const handleKeyUp = (event) => {
    if (event.keyCode === 13 || event.which === 13) {
      handleSubmit();
    }
  }

  const handleCheck = () => {
    setChecked(!checked);
  }

  return (
    <div>
      <form className="flex flex-col border-gray-700 border-1 rounded-xl">
        <h1 className="ml-9">My Todo</h1>
        <div>
          <input
            onChange={handleChange}
            onKeyUp={handleKeyUp}
            type="text"
            className="w-11/12 mx-auto"
            placeholder="new task"
          />
          <hr className="w-11/12 mx-auto" />
          <BtnForm>Add to list</BtnForm>
        </div>
        <div>
          <div className="flex justify-between">
            <div className="ml-5px">
              <input type="checkbox" onChange={handleCheck} />
              
              <div>
                {todos.map((item) => (
                  <ToDoItem key={item.id}>{item.taskName}</ToDoItem>
                ))}
              </div>

            </div>
            <p onClick={() => handleDelete(item.id)} className="px-5">X</p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToDoPage;
