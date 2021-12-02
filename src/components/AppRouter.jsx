import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AboutUs from './pages/AboutUs'
import { Contact } from './pages/Contact'
import { Home } from './pages/Home'
import NavBar from './NavBar'

export default function AppRouter() {
    return (
        <Router>
            <NavBar />
            <Routes> 
                <Route path="/contact" element={ <Contact />}/>
                <Route path="/" element={ <Home />}/>
                <Route path="/about" element={ <AboutUs />}/>
            </Routes>
        </Router>
    )
}
