import React, { useEffect, useState } from 'react'
import useListStore from '../stores/listStore';
import useAuthStore from '../stores/authstore';

function ToDoPage() {
  const [checked, setChecked] = useState(fales)

  const userId = useAuthStore((state) => state.userId);

  const actionFetchListsByUserID = useListStore(
    (state) => state.actionFetchListsByUserID
  )

  const lists = useListStore((state) => state.lists)

  useEffect(() => {
    actionFetchListsByUserID(userId);
  }, []);

  console.log('lists', lists)

  

  const handleCheck = () => {
    setChecked(!checked);
  }



  return (
    <div className='border-gray-700 border-1 rounded-xl'>
      <h1>My Todo</h1>
      <input type='text'/>
      <br />
      <div>
        <span>
        <input type='checkbox' onChange={handleCheck}/> 
        <p>This is what to do</p>
        <p onClick={handleClose}>X</p>
        </span>
      </div>
    </div>
  )
}

export default ToDoPage