import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Header from '../UserLayout/Header'
import Footer from '../UserLayout/Footer'
import San from '../../pages/user/San'
import ChiTietSan from '../../pages/user/ChiTietSan'
const Dashboard = () => {
    return (
        <div>
            <Header/>
                <Routes>
                    <Route path='san' element={<San/>}></Route>
                    <Route path='san/:id' element={<ChiTietSan/>}></Route>
                </Routes>
            <Footer/>
        </div>
    )
}

export default Dashboard