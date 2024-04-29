
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'

function App() {


  return (
    <>
    <Navbar></Navbar>
    <Outlet></Outlet>
    <Footer></Footer>
    </>
  )
}

export default App
