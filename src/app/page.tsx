 
 import React from 'react';
 import TodoList from './components/TodoList';

 export default function Page() {
   return (
     <div 
       className="bg-cover bg-center h-screen"
       style={{ backgroundImage: "url('/background.png')" }}
     >
       <TodoList />
     </div>
   );
 }
 
