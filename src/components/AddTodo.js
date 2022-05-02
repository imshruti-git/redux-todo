import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";

const AddTodo = () => {
    const [value, setValue] = useState('');

	const dispatch = useDispatch();

    const onSubmit= (event) => {
        event.preventDefault();
        dispatch(
			addTodo({
				title: value,
			})
		);
		setValue('');
    };
	
  return(
    <form onSubmit={onSubmit} className='form-inline mt-3 mb-3'>
			
			<input
				type='text'
				className='form-control mb-2 mr-sm-2'
				style={{width:'50vw'}}
				placeholder='Add todo...'
				value={value}
				onChange={(event) => setValue(event.target.value)}
			></input>

			<button disabled={!value} type='submit' className='btn btn-primary mb-2'>
				Submit
			</button>
		</form>
  );
};

export default AddTodo;
