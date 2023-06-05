import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { navbar } from '../utils/navbar'
import Navbar from '../components/Navbar'


export const Root = () => {
 
  return (      <div>
      <BrowserRouter>
    <Navbar/>
      <Routes>
           
              {navbar.map(({path,element},index)=>{
                return(
                  <Route key={index} path={path} element={element} />
                )
              })}
        <Route path='/' element={<Navigate to='/home'/>} />
        <Route path='*' element={<h1>404 NOT FOUND</h1>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}
export default Root
