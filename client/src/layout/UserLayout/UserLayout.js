import React from "react";
import { Route, Routes } from 'react-router-dom'
import Header from "../UserLayout/Header";
import Footer from "../UserLayout/Footer";
import San from '../../pages/user/San';
import ChiTietSan from '../../pages/user/ChiTietSan';
import Home from "../../pages/user/Home";
import GioiThieu from "../../pages/user/GioiThieu";



const UserLayout = () => {
  return (
    <div>
      <Header />
      <div>
        <section >
          <div >
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/gioithieu' element={<GioiThieu />}></Route>
              <Route path='san' element={<San />}></Route>
              <Route path='san/:id' element={<ChiTietSan />}></Route>
            </Routes>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default UserLayout;
