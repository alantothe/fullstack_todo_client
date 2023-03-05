import React from 'react';

function ToDoCard({ todo }) {
  return (
    <div>
      <h2>{todo.title}</h2>
      <p>ID: {todo._id}</p>
      <p>Description: {todo.description}</p>
      <p>Priority: {todo.priority}</p>
      <p>Is Complete: {todo.isComplete ? 'Complete' : 'Incomplete'}</p>
      <p>Creation Date: {todo.creationDate.toString()}</p>
      <p>Last Modified: {todo.lastModified.toString()}</p>
      {todo.completedDate && (<p>Completed Date: {todo.completedDate}</p>)}
    </div>
  );
}

export default ToDoCard;
