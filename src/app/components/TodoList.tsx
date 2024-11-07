
'use client'

import{ useState } from 'react'

interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

const TodoList = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [inputValue, setInputValue] = useState('');

    //add of items
    const addTodo = () => {
        if (inputValue.trim() === '') return;
        setTodos([

            ...todos, { id: Date.now(), text: inputValue, completed: false },
        ]);
       setInputValue ('');
    };

   //add values id:
   const toggleTodo = (id: number)=>{
       setTodos(
           todos.map((todo) => 
               todo.id === id?
                {...todo, completed: !todo.completed}
               : todo
           )
       )
   };

//delete todo section
const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
};


return(
<div className='flex flex-col min-h-screen'>
<header>
<div>

<h1 className='pt-8 text-center underline decoration-cyan-300 md:decoration-2 justify-center text-balance text-4xl text-cyan-200 font-bold font-serif'>To-Do List by HAFSA KAMALI</h1>
<p className='pt-8 text-center justify-center text-balance text-3xl text-white font-bold font-serif'> 
    {" "}
    ORGANIZE YOUR WORK WITH THIS AMAZING & UNIQUE TO-DO LIST </p>

</div>

</header>
<main className='flex-grow flex items-center justify-center'>
    <div className='max-w mx-auto p-5 bg-white bg-opacity-45 rounded-lg shadow-2xl shadow-background'>
<div className='mb-4'>
<div className='flex'>
 <input
  type="text"
  value = {inputValue}
  onChange={(e) => setInputValue(e.target.value)}
  className='flex-grow w-96 p-3 border border-gray-400 rounded-lg text-black font-serif font-bold'
  placeholder = "Add a task..."
  />
  <button 
  onClick={addTodo}
  className='ml-2 px-4 py-2 bg-cyan-400 text-white rounded-lg hover:bg-blue-600'>
Add
  </button>
</div>
</div>

<ul className='space-y-2'>
{todos.map((todo)=> (
<li key={todo.id} 
  className={`flex items-center justify-between p-2 border border-slate-400 rounded-lg ${

  todo.completed ? 'bg-blue-600 bg-opacity-30 text-xl text-white font-semibold font-sans line-through' : 'bg-white bg-opacity-30 text-xl font-semibold font-serif text-blue-800'
  }`}

>

    <span>{todo.text}</span>

<div>
    <button
    onClick={() => toggleTodo(todo.id)}
    className='px-4 py-2 bg-sky-400 text-white rounded-lg hover:bg-sky-500 font-serif'
    >
    {todo.completed ? 'Undo' : 'Complete'}
    </button>
    <button
    onClick={() => deleteTodo(todo.id)}
    className='ml-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 font-serif'
    >
     Delete
    </button>
</div>

    </li>
))}



</ul>

    </div>
</main>
</div>
);
    

};
export default TodoList