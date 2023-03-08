import React from 'react';
import ToDoCard from '../components/ToDoCard';

function HomePage(props) {
  const { toDoList, urlEndpoint, setShouldRefetch } = props;


  return (
    <div>
      <h1>To-do List</h1>
      {toDoList.map(todo => (
        <ToDoCard key={todo._id} todo={todo} urlEndpoint={urlEndpoint} setShouldRefetch={setShouldRefetch} toDoList={toDoList}  />
      ))}

    </div>
  );
}

export default HomePage;
