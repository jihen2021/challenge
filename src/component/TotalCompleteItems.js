import React from 'react';
import { useSelector } from 'react-redux';

const TotalCompleteItems = () => {

	const todosCompleted = useSelector((state) => 
		state.TodoReducer.todos.filter((todo)=> todo.completed===true));

	return (
	<h4 className='mt-3 total sofia2'>Total Complete Items: {todosCompleted.length}</h4>);
};

export default TotalCompleteItems;