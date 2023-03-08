import React, { useState } from 'react';

function ToDoCard(props) {
  const { todo, urlEndpoint, setShouldRefetch } = props;
  const [successMessage, setSuccessMessage] = useState('Done');
  const [id, setId] = useState(todo.id);

  const handleSetTodoComplete = async () => {

      setShouldRefetch(true)
      const oppositeComplete = !todo.isComplete;
      const response = await fetch(`${urlEndpoint}/api/todos/update-one/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          isComplete: !todo.isComplete,
        }),
      });
      setShouldRefetch(false);
    };
  const handleDeleteTodo = async () => {
      setShouldRefetch(true);
      const response = await fetch(`${urlEndpoint}/api/todos/delete-one/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      setShouldRefetch(false);
    };

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
      <button onClick={handleSetTodoComplete}> Complete</button>
      <button onClick={handleDeleteTodo}> Delete</button>
      {successMessage && <p>{successMessage}</p>}
    </div>
  );
}

export default ToDoCard;

