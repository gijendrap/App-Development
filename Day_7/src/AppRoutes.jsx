import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'

const AppRoutes = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route exact path='/' element={<App />} />
                    <Route exact path='/Home' element={<Home/>} />  
                    <Route exact path='/About' element={<About/>} />   
                    <Route exact path='/Services' element={<Services/>} />   
                    <Route exact path='/Contact' element={<Contact/>} />   

                </Routes>
            </BrowserRouter>

        </>
    )
}

export default AppRoutes