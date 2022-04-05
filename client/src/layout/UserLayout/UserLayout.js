import React from "react";
import { Route, Routes } from 'react-router-dom'
import Header from "../UserLayout/Header";
import Footer from "../UserLayout/Footer";
import San from '../../pages/user/San';
import ChiTietSan from '../../pages/user/ChiTietSan';
import Home from "../../pages/user/Home";
import LoginForm from "../../pages/user/DangNhapUser/LoginForm";
import RegisterForm from "../../pages/user/DangNhapUser/RegisterForm";
import PhieuDatSan from "../../pages/user/PhieuDatSan";
import TinTuc from "../../pages/user/Tapchi/TapChi";
import ChiTietTinTuc from "../../pages/user/Tapchi/ChiTietTapChi";

const UserLayout = () => {
  return (
    <div>
      <Header />
      <div>
        <section >
          <div >
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='san' element={<San />}></Route>
              <Route path='san/:id' element={<ChiTietSan />}></Route>
              <Route path="login" element={<LoginForm />}></Route>
              <Route path="register" element={<RegisterForm />}></Route>
              <Route path="phieudatsan" element={<PhieuDatSan />}></Route>
              <Route path="tintuc" element={<TinTuc />}></Route>
              <Route path="tintuc/:id" element={<ChiTietTinTuc />}></Route>
            </Routes>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default UserLayout;
