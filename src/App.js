import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './Login'
import NewClient from './NewClient'
import Home from './Home'
import ViewClients from './ViewClients'


export default function App(){
  return(
    <div>
     
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/home" element={<Home/>}/>
        <Route path='/newClient' element={<NewClient/>} />
        <Route path='/viewClients' element={<ViewClients/>}/>
      </Routes>
    </div>

  )
}