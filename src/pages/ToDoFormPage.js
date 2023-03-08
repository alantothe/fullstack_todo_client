import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ToDoForm = (props) => {
  const { urlEndpoint, setShouldRefetch } = props;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const navigate = useNavigate();

  const handleCreateToDo = async () => {
    setShouldRefetch(true);
    setSuccessMessage("");
    const response = await fetch(`${urlEndpoint}/api/todos/create-one`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        description,
        priority,
      }),
    });
    if (response.ok !== true) {
      setSuccessMessage("ToDo network request failed");
      return;
    }


    const payload = await response.json();
    if (payload.success !== true) {
      setSuccessMessage(`To Do server error", ${payload.error}`);
      return;
    }
    setSuccessMessage("To Do created successfully");
    setShouldRefetch(false);
  };

  const redirectUserFunction = () => {
    navigate("/");
  };
  return (
    <div>
      <h1>Create To Do Form:</h1>
      {successMessage && <p>{successMessage}</p>}
      <label>Title: </label>
      <input
        type='text'
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <br />
      <label>Description: </label>
      <textarea
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <br />
      <label>Priority: </label>
      <select
        onChange={(e) => {
          setPriority(e.target.value);
        }}
      >
        <option value=''></option>
        <option value='High'>High</option>
        <option value='Medium'>Medium</option>
        <option value='Low'>Low</option>
      </select>
      <br />
      <button
        onClick={() => {
          handleCreateToDo();
          redirectUserFunction();
        }}
      >
        Create To Do
      </button>
    </div>
  );
};

export default ToDoForm;