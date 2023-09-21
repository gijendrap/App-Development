import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Home from './Home'
const AppRoutes = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route exact path='/' element={<App />} />
                    <Route exact path='/Home' element={<Home/>} />   
                </Routes>
            </BrowserRouter>

        </>
    )
}

export default AppRoutes