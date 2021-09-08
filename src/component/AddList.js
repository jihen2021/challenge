import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {add} from '../redux/actions/action2'
function AddList() {
 const [newTodo, setNewTodo] = useState('')
 
const dispatch = useDispatch()
	return (
		<div>
			<form className='form-inline mt-3 mb-3' 
			onSubmit={(e)=>
				{dispatch(add({id:Date.now(),title:newTodo ,completed:false}))
		         e.preventDefault();
				 setNewTodo('')
				 }}>
				<input
					type='text'
					className='form-control mb-2 mr-sm-2'
					placeholder='Add todo...'
					value={newTodo}
					onChange={(e)=>setNewTodo(e.target.value)}
				
				></input>
				<button type='submit' className='btn btn1   sofia'  >
					ADD
	
				</button>
			
			</form>
		
		</div>
	)
}

export default AddList
