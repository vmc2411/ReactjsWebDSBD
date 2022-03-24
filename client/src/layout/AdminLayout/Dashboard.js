import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Sidebar from './Sidebar'
import San from '../../pages/admin/San'
const Dashboard = () => {
    return (
        <div className='wrapper'>
            <Header />
            <Sidebar />
            <div className="content-wrapper">
                <section className="content">
                    <div className="container-fluid">
                        <Routes>
                            <Route path='san' element={<San/>}></Route>
                        </Routes>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    )
}

export default Dashboard