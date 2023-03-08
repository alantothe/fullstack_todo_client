import { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider} from 'react-router-dom';

import GlobalLayout from "./layout/GlobalLayout";
import HomePage from "./pages/HomePage";
import ToDoFormPage from "./pages/ToDoFormPage";


const urlEndpoint = process.env.REACT_APP_URL_ENDPOINT;



const App = () => {
  const [toDoList, setToDoList] = useState([]);
  const [shouldRefetch, setShouldRefetch] = useState(false);


  useEffect(() => {
    async function fetchToDoList() {
      try {
        const response = await fetch(`${process.env.REACT_APP_URL_ENDPOINT}/api/todos/all`);
        const data = await response.json();
        console.log(response);
        console.log(data);
        setToDoList(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchToDoList();
  }, [shouldRefetch]);

  const router = createBrowserRouter([

    {
      path: '/',
      element: <GlobalLayout />,
      children: [
        {
          element: (
            <HomePage toDoList={toDoList} setToDoList={setToDoList} urlEndpoint={urlEndpoint} setShouldRefetch={setShouldRefetch} />
          ),
          index: true,
        },
        {
          path: "/todo-form",
          element:(
            <ToDoFormPage urlEndpoint={urlEndpoint}  setShouldRefetch={setShouldRefetch}

            />
          ),



        }
      ]
    }


  ])
return (
    <div className="App-header">
      <RouterProvider router={router}/>
    </div>
  )
}

export default App;
