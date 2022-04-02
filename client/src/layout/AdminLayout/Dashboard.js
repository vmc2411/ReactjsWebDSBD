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

import ListKhungGio from '../../pages/admin/Khunggio/ListKhungGio'
import AddKhungGio from '../../pages/admin/Khunggio/AddKhungGio'
import EditKhungGio from '../../pages/admin/Khunggio/EditKhungGio'


import ListLoaitintuc from '../../pages/admin/Loaitintuc/ListLoaitintuc';
import AddLoaitintuc from '../../pages/admin/Loaitintuc/AddLoaitintuc';
import EditLoaitintuc from '../../pages/admin/Loaitintuc/EditLoaitintuc';

import ListTintuc from '../../pages/admin/Tintuc/ListTintuc';
import ThemTintuc from '../../pages/admin/Tintuc/AddTintuc';
import EditTinTuc from '../../pages/admin/Tintuc/EditTintuc';

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

                            <Route path='loaitintuc' element={<ListLoaitintuc/>}></Route>
                            <Route path='loaitintuc/add' element={<AddLoaitintuc/>}></Route>
                            <Route path='loaitintuc/edit/:id' element={<EditLoaitintuc/>}></Route>

                            <Route path='tintuc' element={<ListTintuc/>}></Route>
                            <Route path='tintuc/add' element={<ThemTintuc/>}></Route>
                            <Route path='tintuc/edit/:id' element={<EditTinTuc/>}></Route>
                    
                        </Routes>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    )
}

export default Dashboard