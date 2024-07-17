 import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Viewprdct from './components/Viewprdct'
import Addprdct from './components/Addprdct'
import { Route, Routes } from 'react-router-dom'

function App() {
 const [count,setCount]=useState(0)
  return (
    <>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Viewprdct/>}></Route>
      <Route path='/add' element={<Addprdct/>}></Route>
     </Routes>
     
    </>
  )
}
export default App