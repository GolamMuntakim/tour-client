import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Addplace from './Component/Addplace.jsx';
import UpdatePlace from './Component/UpdatePlace.jsx';
import Login from './Component/Login.jsx';
import Register from './Component/Register.jsx';
import AuthProvider from './Component/AuthProvider.jsx';
import All from './Component/All.jsx';
import Home from './Component/Home.jsx';
import Update from './Component/Update.jsx';
import Countries from './Component/Countries.jsx';
import View from './Component/View.jsx';
import Viewcard from './Component/Viewcard.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:()=>fetch('http://localhost:5000/places')
      },
      {
        path:'/addplace',
        element:<Addplace></Addplace>
      },
      {
        path:'/updateplace',
        element:<UpdatePlace></UpdatePlace>,
        // loader:()=>fetch('http://localhost:5000/places')
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path: '/register',
        element:<Register></Register>
      },
      {
        path:'/all',
        element:<All></All>,
        loader:()=>fetch('http://localhost:5000/places')
      },
      {
        path:'/update/:id',
        element:<Update></Update>
      },
      {
        path:'/country',
        element:<Countries></Countries>,
      },
      {
        path: '/viewdetail/:id',
        element:<View></View>,
      },
      {
        path:'/details/:id',
        element:<Viewcard></Viewcard>,
        // loader:()=>fetch(`http://localhost:5000/details`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
