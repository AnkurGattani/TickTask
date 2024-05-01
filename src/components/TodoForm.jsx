import React, {useState} from 'react'
import { useTodo } from '../context';

function TodoForm() {
	const [todo, setTodo] = useState("");

	const {addTodo} = useTodo();

	const addToTodoList = (e) => {
		e.preventDefault();

		if(!todo) 	return;

		// addTodo({id: Date.now(), todo: todo, completed: false})
		addTodo({ todo, completed: false }); // same as above one. see the addTodo function in App.jsx where we require the new todo in the form of an object
		setTodo(""); // to set the input field again to empty for new todo to be added after adding the current one.

	}

	return (
		<form onSubmit={addToTodoList} className="flex">
			<input
				type="text"
				placeholder="Write Todo..."
				className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-4000 bg-white/20 py-1.5"
				value={todo}
				onChange={(e) => setTodo(e.target.value)}
			/>
			<button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
				Add
			</button>
		</form>
	);
}

export default TodoForm;