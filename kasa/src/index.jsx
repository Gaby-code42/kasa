import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home' 
import Error from './components/Error'
import HousingDetails from './pages/HousingDetails'
import About from './pages/About'
import Header from './components/Header'
import Footer from './components/Footer'


//import Footer from './components/Footer'
//import Error from './components/Error407'

// ne pas oublier de modifier url a chaque changement de logement.
const root = createRoot(document.getElementById('root')) 
root.render(
  <React.StrictMode>
    <Router>
        <Header/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/housing" element={<HousingDetails />}/>  
            <Route path="/about" element={<About />}/>
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer/>
    </Router>
  </React.StrictMode>
  
)