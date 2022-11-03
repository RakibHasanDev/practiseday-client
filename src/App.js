import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components/layout/Main'
import Home from './components/Home/Home';
import AddUser from './components/AddUser/AddUser';
import Update from './components/Update/Update';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      errorElement: <h1>404 NOT FOUND</h1>,
      children: [
        {
          path: '/',
          loader: () => fetch('https://practise-server-mrmerndeveloper.vercel.app/products'),
          element: <Home></Home>
        },
        {
          path: '/product/add',
          element: <AddUser></AddUser>
        },
        {
          path: '/update/:id',
          element: <Update></Update>,
          loader: ({ params }) => fetch(`https://practise-server-mrmerndeveloper.vercel.app/products/${params.id}`)
        }
      ]
    }
  ])





  return (
    <div className="body">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;