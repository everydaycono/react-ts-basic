import { BrowserRouter, Route, Routes } from 'react-router-dom'

// Components
import NavbarComp from './components/Navbar'

// Pages
import Home from './Pages/Home'
import Menus from './Pages/Menus'
import Tours from './Pages/Tours'

function App() {

  return (
    <BrowserRouter>
        <NavbarComp />
      <div className="App">

        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/tour" element={<Tours />} /> 
          <Route path="/menu" element={<Menus />} /> 
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
