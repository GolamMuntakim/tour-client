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
import PrivateRoute from './Component/PrivateRoute.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:()=>fetch('https://tour-server-ten.vercel.app/places')
      },
      {
        path:'/addplace',
        element:<PrivateRoute><Addplace></Addplace></PrivateRoute>
      },
      {
        path:'/updateplace',
        element:<PrivateRoute><UpdatePlace></UpdatePlace></PrivateRoute>,
        // loader:()=>fetch('https://tour-server-ten.vercel.app/places')
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
        loader:()=>fetch('https://tour-server-ten.vercel.app/places')
      },
      {
        path:'/update/:id',
        element:<PrivateRoute><Update></Update></PrivateRoute>
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
        element:<PrivateRoute><Viewcard></Viewcard></PrivateRoute>
        // loader:()=>fetch(`https://tour-server-ten.vercel.app/details`)
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
