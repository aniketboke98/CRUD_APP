import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home.jsx'
import Userdata from './components/Userdata.jsx'
import Navbar from './components/Navbar.jsx'
import Edit from './components/Edit.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/userdata" element={<Userdata />} />
        <Route path='/edit/:id' element={<Edit />} />
      </Routes>
    </Router>
  )
}

export default App
