import React from 'react'
import { useDispatch } from 'react-redux';
import { toggleComplete, deleteTodo, editTodo } from '../redux/todoSlice';

const TodoItem = ({ id, title, completed}) => {

	const dispatch = useDispatch();

	const handleCheckBox = () => {
		dispatch(toggleComplete({
			id:id, 
			completed: !completed,
		}))
	}

	const handleDelete = () => {
		dispatch(deleteTodo({id:id}))
	}

	const handleEdit = () => {
		dispatch(editTodo({id:id}))
	}
  return ( 
    <li className="list-group-item">
			<div className='d-flex justify-content-between'>
				<span className='d-flex align-items-center'>
					<input
						type='checkbox'
						className='mr-5'
						checked={completed}
						onClick={handleCheckBox}
					/>
					{title}
				</span>
				<div>
				<button 
					className='btn btn-success'
					onClick={handleEdit}
					>
					Edit
				</button>
				<button 
					className='btn btn-danger mx-3'
					onClick={handleDelete}>
					Delete
				</button>
				</div>
			</div>
		</li>
  )
}

export default TodoItem