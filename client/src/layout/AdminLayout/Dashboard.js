import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Sidebar from './Sidebar'

import San from '../../pages/admin/San/ListSan'
import AddSan from '../../pages/admin/San/AddSan'
import EditSan from '../../pages/admin/San/EditSan'

import Add from '../../pages/admin/Loaisan/Add';
import Edit from '../../pages/admin/Loaisan/Edit';
import Index from '../../pages/admin/Loaisan/Index';

import ListKhungGio from '../../pages/admin/Khunggio/ListKhungGio';
import AddKhungGio from '../../pages/admin/Khunggio/AddKhungGio';
import EditKhungGio from '../../pages/admin/Khunggio/EditKhungGio';

import HoaDon from '../../pages/admin/HoaDon/HoaDon'

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

                            <Route path='khunggio' element={<ListKhungGio/>}></Route>
                            <Route path='khunggio/add' element={<AddKhungGio/>}></Route>
                            <Route path='khunggio/edit/:id' element={<EditKhungGio/>}></Route>

                            <Route path='hoadon' element={<HoaDon/>}></Route>
                        </Routes>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    )
}

export default Dashboard