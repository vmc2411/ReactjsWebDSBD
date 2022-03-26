import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Sidebar from './Sidebar'
import San from '../../pages/admin/San/ListSan'
import AddSan from '../../pages/admin/San/AddSan'
import EditSan from '../../pages/admin/San/EditSan'

import Add from '../../pages/admin/Loaisan/Add';
import Delete from '../../pages/admin/Loaisan/Deletes';
import Edit from '../../pages/admin/Loaisan/Edit';
import Index from '../../pages/admin/Loaisan/Index';



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
                            <Route path='san/add' element={<AddSan/>}></Route>
                            <Route path='san/edit/:id' element={<EditSan/>}></Route>

                            <Route path='loaisan' element={<Index/>}></Route>
                            <Route path='loaisan/add' element={<Add/>}></Route>
                            <Route path='loaisan/edit/:id' element={<Edit/>}></Route>
                        </Routes>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    )
}

export default Dashboard