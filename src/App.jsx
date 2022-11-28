import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Landing from './pages/Home/pages/Landing'


function App() {

  return (

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />} />
        </Routes>
      </BrowserRouter>
  
  )
}

export default App
