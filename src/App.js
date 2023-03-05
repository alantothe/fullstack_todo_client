import { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider} from 'react-router-dom';

import GlobalLayout from "./layout/GlobalLayout";
import HomePage from "./pages/HomePage";



const App = () => {
  const [toDoList, setToDoList] = useState([]);

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
  }, []);

  const router = createBrowserRouter([

    {
      path: '/',
      element: <GlobalLayout />,
      children: [
        {
          element: (
            <HomePage toDoList={toDoList} />
          ),
          index: true,
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
