import React from 'react';
import Register from './pages/register/Register';
import { createBrowserRouter,Navigate,Outlet,RouterProvider, } from "react-router-dom"
import Navbar from './pages/navbar/Navbar';
import LeftBar from './pages/leftBar/LeftBar';
import Dashboard from './pages/dashboard/Dashboard';
import Profile from './pages/profile/Profile';
import "./app.scss"
import EditProfile from './pages/blankPage/EditProfile';
import Network from './pages/blankPage/Network';
import Help from './pages/blankPage/Help';
const App = () => {
  const user = JSON.parse(localStorage.getItem("currentUser"))
  
  const ProtectedRoute=({children})=>{
    if(!user){
      return <Navigate to="/register"/>
    }
    return children
  }
  const Layout = ()=>{
    return (
      <div className='appNav'>
        <Navbar/>
        <div style={{display:"flex"}}>
        <LeftBar user={user}/>
        <div style={{flex:"4"}}>
        <Outlet/>
        </div>
        </div>
       
      </div>
    )
  }
  

  const router = createBrowserRouter([
    {
      path:"/",
      element: <ProtectedRoute><Layout/></ProtectedRoute> ,
      children:[
        {
          path:"/",
          element:<Dashboard user={user}/>

        },
        {
          path:"/profile",
          element:<Profile/>
        },
        {
          path:"/editprofile",
          element:<EditProfile/>
          
        },
        {
          path:"/network",
          element:<Network/>
          
        },
        {
          path:"/help",
          element:<Help/>
          
        },

      ]
    },
    {
      path:"/register",
      element:<Register/>
    }
  ])
  return (
   <>
  <RouterProvider router={router} />
   </>
  )
}

export default App