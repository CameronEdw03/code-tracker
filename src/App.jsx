import { useState } from 'react'
import Code from './Code'
import { BrowserRouter,Routes, Route} from 'react-router-dom'
import Project from './Project'


function App() {
  

  return (
    <div>
      <Route path="/" element={<Code />} />
      <Route path='/Project/:id' element={<Project />} />
    </div>
  )
}

export default App
