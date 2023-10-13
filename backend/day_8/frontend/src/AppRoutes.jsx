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
import DashBoard from './pages/Dashboard/DashBoard'
import AppHouse from './house/AppHouse'
import AdminEve from './AdminPage/AdminEve'
// import indexon from './indexon'
// import { UserAuth } from './auth/UserAuth'
// import {AdminAuth} from './auth/AdminAuth'


const AppRoutes = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>

                    <Route exact path='/' element={<App />} />

                {/* <Route element={<UserAuth />}> */}
                    <Route exact path='/Home' element={<Home/>} />  
                    <Route exact path='/About' element={<About/>} />   
                    <Route exact path='/Event' element={<Event/>} />   
                    <Route exact path='/Contact' element={<Contact/>} />   
                    <Route exact path='/Faq' element={<Faq/>} />   
                    <Route exact path='/Terms' element={<Terms/>} />   
                    <Route exact path='/Privacy' element={<Privacy/>} />   
                    <Route exact path='/DashBoard' element={<DashBoard/>} />   
                    <Route exact path='/AppHouse' element={<AppHouse/>} />   
                    <Route exact path='/indexon' element={<indexon/>} />   
                    {/* </Route> */}


                    {/* <Route element={<AdminAuth />}> */}
                    <Route exact path='/AdminEve' element={<AdminEve/>} />   
                    {/* </Route> */}

                </Routes>
            </BrowserRouter>

        </>
    )
}

export default AppRoutes