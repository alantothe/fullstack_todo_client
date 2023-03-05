import React from 'react';
import ToDoCard from '../components/ToDoCard';

function HomePage({ toDoList }) {
  return (
    <div>
      <h1>To-do List</h1>
      {toDoList.map(todo => (
        <ToDoCard key={todo._id} todo={todo} />
      ))}
    </div>
  );
}

export default HomePage;
