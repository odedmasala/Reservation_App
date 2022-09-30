import React from 'react'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Home from './pages/Home'
import Hotel from './pages/Hotel'
import List from './pages/List'
function App ()  {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotels" element={<List/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App