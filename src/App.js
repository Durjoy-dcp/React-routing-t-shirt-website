
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Shirts from './Components/Shirts/Shirts';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [{
        path: '/',
        element: <Shirts></Shirts>
      }]
    }

  ])
  return (
    <div >
      <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
