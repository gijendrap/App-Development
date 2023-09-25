import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Event from './pages/Event/Event'
import Faq from './pages/Faq/Faq'
import Contact from './pages/Contact/Contact'
import Terms from './pages/termsandcon/Terms'
import Privacy from './pages/privpolicy/Privacy'

const AppRoutes = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route exact path='/' element={<App />} />
                    <Route exact path='/Home' element={<Home/>} />  
                    <Route exact path='/About' element={<About/>} />   
                    <Route exact path='/Event' element={<Event/>} />   
                    <Route exact path='/Contact' element={<Contact/>} />   
                    <Route exact path='/Faq' element={<Faq/>} />   
                    <Route exact path='/Terms' element={<Terms/>} />   
                    <Route exact path='/Privacy' element={<Privacy/>} />   

                </Routes>
            </BrowserRouter>

        </>
    )
}

export default AppRoutes