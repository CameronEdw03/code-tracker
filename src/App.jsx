import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Code from './Code';
import Project from './Project';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Code />} />
        <Route path="/Project/:id" element={<Project />} />
        <Route path='/Code' element={<Code />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;