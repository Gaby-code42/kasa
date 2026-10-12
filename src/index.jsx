import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home' 
import HousingDetails from './pages/HousingDetails'
import About from './pages/About'
import Header from './components/Header'
import Footer from './components/Footer'
import Error from './components/Error'

// ne pas oublier de modifier url a chaque changement de logement.
const root = createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <Router>
        <Header/>
          <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/about" element={<About />}/>
            <Route path="/housing/:id" element={<HousingDetails />} />  
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
    </Router>
  </React.StrictMode>
  
)