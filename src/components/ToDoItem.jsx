import React, { useState } from "react";
import useToDoStore from "../stores/toDoStore";

function ToDoItem({ item }) {
  const actionFetchToDos = useToDoStore((state) => state.actionFetchToDos);
const BASE_URL = "http://cc20-todo-midterm-env.eba-fi9p2pds.ap-southeast-1.elasticbeanstalk.com";

  const [isEdit, setIsEdit] = useState(false);
  const [input, setInput] = useState({
    id: item.id || "",
    taskName: item.taskName || "",
    completed: false,
    userId: 1,
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setInput((prev) => ({ ...prev, [id]: value }));
  };

  const handleSave = async (id) => {
    return await axios.put(`${BASE_URL}/api/V1/todos/${id}/1`, input);
  };

  // const handleDelete = async (id) => {
  //   await axios.delete(`${BASE_URL}/api/V1/todos/${id}/1`);
  // };

  return (
    <div>
      {isEdit ? (
        <input
          id="taskName"
          value={input.taskName}
          type="text"
          onChange={handleChange}
        />
      ) : (
        <h1>{item.taskName}</h1>
      )}

      {isEdit ? (<button className="btn btn-neutral" onClick = {() => handleSave(item.id)}>Save</button>) : (<button className="btn btn-neutral" onClick = {() => setIsEdit(true)}>Edit</button>)}

      <button className="btn btn-error" onClick={() => handleDelete(item.id)}>Delete</button>
    </div>
  );
}

export default ToDoItem;
