import React from 'react'
import { useSelector } from 'react-redux';


const TotalItems = () => {
  
  const totalCompleted = useSelector((state) => 
    state.todos.filter((todo) => todo.completed === true)
  );
  return (
    <h3 className='mt-3'>
        Total items: {totalCompleted.length}
    </h3>
  )
}

export default TotalItems